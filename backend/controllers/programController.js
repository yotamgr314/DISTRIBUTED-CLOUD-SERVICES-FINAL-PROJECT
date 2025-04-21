// 📁 controllers/programController.js

const tmdb = require("../services/tmdbService");

// GET /api/programs/homepage
// Only regular users may fetch this
exports.getHomePage = async (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    // rotating cover: take the top 4 trending items
    const trendingData = await tmdb.getTrending();
    const cover = trendingData.results.slice(0, 4);

    // one content row: "New on Netflix"
    const newReleasesData = await tmdb.getNewReleases();
    const newOnNetflix = newReleasesData.results.slice(0, 10);

    return res.status(200).json({
      cover, // array of 4 programs for the rotating hero
      newOnNetflix, // first 10 new releases
    });
  } catch (err) {
    console.error("Failed to fetch homepage content:", err.message);
    return res.status(500).json({ message: "Failed to load homepage content" });
  }
};
