// backend/controllers/programController.js

const tmdb = require("../services/tmdbService");
const Program = require("../models/Program");
const Review = require("../models/Review");

/**
 * TMDB genre ID → human-readable name mapping.
 * Extend this list as needed.
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
 * Convert array of genre‐ID strings into array of names.
 */
function mapGenres(ids = []) {
  return ids.map((id) => genreMap[id] || id);
}

/**
 * Upsert external TMDB items into our `Program` collection,
 * then merge TMDB data + our local fields, mapping genres to names.
 */
async function mergeExternalWithLocal(externalItems) {
  const extIds = externalItems.map((it) => it.id.toString());
  // Grab any existing locals in one go
  const locals = await Program.find({ externalId: { $in: extIds } }).lean();

  return Promise.all(
    externalItems.map(async (ext) => {
      const idStr = ext.id.toString();
      let local = locals.find((l) => l.externalId === idStr);

      if (!local) {
        // First time we see this TMDB item → create record
        local = await Program.create({
          externalId: idStr,
          type: ext.media_type === "movie" ? "movie" : "tv",
          title: ext.title || ext.name,
          description: ext.overview,
          genres: (ext.genre_ids || []).map(String), // store raw IDs
          cast: [],
          crew: [],
          releaseDate: ext.release_date || null,
          posterPath: ext.poster_path || null,
          backdropPath: ext.backdrop_path || null,
        });
        locals.push(local);
      }

      return {
        // keep all TMDB fields
        ...ext,
        // override with our local fields
        _id: local._id,
        externalId: local.externalId,
        type: local.type,
        title: local.title,
        description: local.description,
        genres: mapGenres(local.genres),      // <-- mapped to names
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
 * — Returns cover + 3 rows: new, animation, action
 */
exports.getHomePage = async (req, res) => {
  try {
    // 1) Cover: top 4 trending
    const trending = await tmdb.getTrending();
    const cover = await mergeExternalWithLocal(trending.results.slice(0, 4));

    // 2) New on Netflix
    const nowPlaying = await tmdb.getNewReleases();
    const newOnNetflix = await mergeExternalWithLocal(nowPlaying.results.slice(0, 10));

    // 3) Animation (genre 16)
    const anim = await tmdb.getMoviesByGenre(16);
    const animation = await mergeExternalWithLocal(anim.results.slice(0, 10));

    // 4) Action (genre 28)
    const act = await tmdb.getMoviesByGenre(28);
    const action = await mergeExternalWithLocal(act.results.slice(0, 10));

    return res.status(200).json({ cover, newOnNetflix, animation, action });
  } catch (err) {
    console.error("getHomePage error:", err);
    return res.status(500).json({ message: "Failed to load homepage content" });
  }
};

/**
 * POST /api/programs
 * — Admin only: manually add a Program
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
      genres, // when admin posts, expect names or IDs
      cast,
      crew,
      releaseDate,
      posterPath,
      backdropPath,
    });
    // map genres before return if they were IDs
    return res.status(201).json({ ...program.toObject(), genres: mapGenres(program.genres) });
  } catch (err) {
    console.error("createProgram error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/programs/:id
 * — Fetch single Program by Mongo _id
 */
exports.getProgramById = async (req, res) => {
  try {
    const prog = await Program.findById(req.params.id).lean();
    if (!prog) {
      return res.status(404).json({ message: "Program not found" });
    }
    prog.genres = mapGenres(prog.genres);
    return res.status(200).json(prog);
  } catch (err) {
    console.error("getProgramById error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/programs/recommendations
 * — User only: recommends up to 10 Programs based on most‐reviewed genres
 */
exports.getRecommendations = async (req, res) => {
  try {
    const profileId = req.profile._id;

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
      recs = recs.map((p) => ({ ...p, genres: mapGenres(p.genres) }));
    } else {
      // fallback to trending
      const trending = await tmdb.getTrending();
      recs = await mergeExternalWithLocal(trending.results.slice(0, 10));
    }

    return res.status(200).json(recs);
  } catch (err) {
    console.error("getRecommendations error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
