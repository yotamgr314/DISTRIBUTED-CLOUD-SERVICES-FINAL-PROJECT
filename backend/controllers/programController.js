// 📁 backend/controllers/programController.js
const tmdb = require("../services/tmdbService");
const Program = require("../models/Program");

// GET /api/programs/homepage
exports.getHomePage = async (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Forbidden" });
  }
  try {
    // Cover: top 4 trending items
    const trendingData = await tmdb.getTrending();
    const cover = trendingData.results.slice(0, 4);

    // Row 1: New on Netflix (latest 10)
    const newReleasesData = await tmdb.getNewReleases();
    const newOnNetflix = newReleasesData.results.slice(0, 10);

    // Row 2: Animation category (genre id 16)
    const animData = await tmdb.getMoviesByGenre(16);
    const animation = animData.results.slice(0, 10);

    // Row 3: Action category (genre id 28)
    const actionData = await tmdb.getMoviesByGenre(28);
    const action = actionData.results.slice(0, 10);

    return res.status(200).json({
      cover,
      newOnNetflix,
      animation,
      action,
    });
  } catch (err) {
    console.error("Failed to fetch homepage content:", err.message);
    return res.status(500).json({ message: "Failed to load homepage content" });
  }
  
};

// POST /api/programs
exports.createProgram = async (req, res) => {
  const {
    externalId, type, title, description,
    genres, cast, crew,
    releaseDate, posterPath, backdropPath
  } = req.body;

  const exists = await Program.findOne({ externalId });
  if (exists) {
    return res.status(400).json({ message: "Program already exists" });
  }

  const program = await Program.create({
    externalId, type, title, description,
    genres, cast, crew,
    releaseDate, posterPath, backdropPath
  });

  res.status(201).json(program);
};

// GET /api/programs/:id
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json(program);
  } catch (err) {
    console.error("Error fetching program by id:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
