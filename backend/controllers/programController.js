const tmdb = require("../services/tmdbService");
const Program = require("../models/Program");
const Review = require("../models/Review");

/**
 * Static mapping of TMDB genre IDs to names.
 * Add or adjust entries as needed based on your TMDB data.
 */
const genreMap = {
  "28": "Action",
  "12": "Adventure",
  "16": "Animation",
  "35": "Comedy",
  "80": "Crime",
  "99": "Documentary",
  "18": "Drama",
  "10751": "Family",
  "14": "Fantasy",
  "36": "History",
  "27": "Horror",
  "10402": "Music",
  "9648": "Mystery",
  "10749": "Romance",
  "878": "Science Fiction",
  "10770": "TV Movie",
  "53": "Thriller",
  "10752": "War",
  "37": "Western",
};

/**
 * Helper to map an array of genre-IDs (as strings) to names.
 */
function mapGenres(ids = []) {
  return ids.map((id) => genreMap[id] || id);
}

/**
 * Upsert each external TMDB item into our Mongo `Program` collection,
 * then return a combined object of TMDB + our local fields,
 * with genres converted to names.
 */
async function mergeExternalWithLocal(externalItems) {
  const extIds = externalItems.map((it) => it.id.toString());
  const locals = await Program.find({ externalId: { $in: extIds } }).lean();

  return Promise.all(
    externalItems.map(async (ext) => {
      const idStr = ext.id.toString();
      let local = locals.find((l) => l.externalId === idStr);

      if (!local) {
        local = await Program.create({
          externalId: idStr,
          type: ext.media_type === "movie" ? "movie" : "tv",
          title: ext.title || ext.name,
          description: ext.overview,
          // store the raw IDs, we'll map them when returning
          genres: (ext.genre_ids || []).map(String),
          cast: [],
          crew: [],
          releaseDate: ext.release_date || null,
          posterPath: ext.poster_path || null,
          backdropPath: ext.backdrop_path || null,
        });
        locals.push(local);
      }

      // Merge and map genre IDs to names
      return {
        ...ext,
        _id: local._id,
        externalId: local.externalId,
        type: local.type,
        title: local.title,
        description: local.description,
        genres: mapGenres(local.genres),
        cast: local.cast,
        crew: local.crew,
        releaseDate: local.releaseDate,
        posterPath: local.posterPath,
        backdropPath: local.backdropPath,
        createdAt: local.createdAt,
        updatedAt: local.updatedAt,
      };
    })
  );
}

/**
 * GET /api/programs/homepage
 * — Fetch 4 rows from TMDB, upsert them into Mongo, return merged arrays
 */
exports.getHomePage = async (req, res) => {
  try {
    // 1) Cover = top 4 trending
    const trendingData = await tmdb.getTrending();
    const coverExt = trendingData.results.slice(0, 4);
    const cover = await mergeExternalWithLocal(coverExt);

    // 2) New on Netflix (now_playing)
    const newData = await tmdb.getNewReleases();
    const newOnNetflix = await mergeExternalWithLocal(
      newData.results.slice(0, 10)
    );

    // 3) Animation (genre 16)
    const animData = await tmdb.getMoviesByGenre(16);
    const animation = await mergeExternalWithLocal(
      animData.results.slice(0, 10)
    );

    // 4) Action (genre 28)
    const actionData = await tmdb.getMoviesByGenre(28);
    const action = await mergeExternalWithLocal(
      actionData.results.slice(0, 10)
    );

    return res.status(200).json({
      cover,
      newOnNetflix,
      animation,
      action,
    });
  } catch (err) {
    console.error("getHomePage error:", err);
    return res.status(500).json({ message: "Failed to load homepage content" });
  }
};

/**
 * POST /api/programs
 * — Admin only: manually create a Program
 */
exports.createProgram = async (req, res) => {
  const {
    externalId,
    type,
    title,
    description,
    genres,
    cast,
    crew,
    releaseDate,
    posterPath,
    backdropPath,
  } = req.body;

  try {
    if (await Program.findOne({ externalId })) {
      return res.status(400).json({ message: "Program already exists" });
    }
    const program = await Program.create({
      externalId,
      type,
      title,
      description,
      genres, // expecting names when admin posts
      cast,
      crew,
      releaseDate,
      posterPath,
      backdropPath,
    });
    return res.status(201).json(program);
  } catch (err) {
    console.error("createProgram error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/programs/:id
 * — Fetch single Program by its Mongo `_id`
 * — Also map stored genre-IDs to names
 */
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id).lean();
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    // map the genres field before returning
    program.genres = mapGenres(program.genres);
    return res.status(200).json(program);
  } catch (err) {
    console.error("getProgramById error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/programs/recommendations
 * — User only, profileMw injects `req.profile`
 * — Return up to 10 Programs in the genres this profile rated most
 */
exports.getRecommendations = async (req, res) => {
  try {
    const profileId = req.profile._id;

    // 1) Count this profile’s public reviews by genre
    const genreCounts = await Review.aggregate([
      { $match: { profile: profileId, isPublic: true, rating: { $gt: 0 } } },
      {
        $lookup: {
          from: "programs",
          localField: "program",
          foreignField: "_id",
          as: "prog",
        },
      },
      { $unwind: "$prog" },
      { $unwind: "$prog.genres" },
      {
        $group: {
          _id: "$prog.genres",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 3 },
    ]);

    let recs;
    if (genreCounts.length) {
      const topGenres = genreCounts.map((g) => g._id);
      recs = await Program.find({ genres: { $in: topGenres } })
        .limit(10)
        .lean();
      // map genres to names
      recs = recs.map((p) => ({
        ...p,
        genres: mapGenres(p.genres),
      }));
    } else {
      // fallback to trending
      const trendingData = await tmdb.getTrending();
      const ext = trendingData.results.slice(0, 10);
      recs = await mergeExternalWithLocal(ext);
    }

    return res.status(200).json(recs);
  } catch (err) {
    console.error("getRecommendations error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
