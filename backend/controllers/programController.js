const tmdb = require("../services/tmdbService");

// GET /api/programs/homepage
exports.getHomePageContent = async (req, res) => {
  try {
    const [trending, newReleases, popular] = await Promise.all([
      tmdb.getTrending(),
      tmdb.getNewReleases(),
      tmdb.getPopularMovies(),
    ]);

    res.status(200).json({
      cover: trending.results.slice(0, 4),
      trending: trending.results.slice(0, 10),
      newReleases: newReleases.results.slice(0, 10),
      mostPopular: popular.results.slice(0, 10),
    });
  } catch (err) {
    console.error("TMDb fetch failed:", err.message);
    res.status(500).json({ message: "Failed to load homepage content" });
  }
};
