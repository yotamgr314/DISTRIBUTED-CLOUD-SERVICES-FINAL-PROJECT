// 📁 backend/services/tmdbService.js
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// Generic fetch wrapper
const fetchFromTMDB = async (endpoint, params = "") => {
  const url = `${TMDB_BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US${params}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }
  return await response.json();
};

// Trending (for cover)
const getTrending = () => fetchFromTMDB("/trending/all/day");
// New releases (for row 1)
const getNewReleases = () => fetchFromTMDB("/movie/now_playing");
// Discover movies by genre
const getMoviesByGenre = (genreId) =>
  fetchFromTMDB(
    "/discover/movie",
    `&with_genres=${genreId}&sort_by=popularity.desc&include_adult=false`
  );

module.exports = {
  getTrending,
  getNewReleases,
  getMoviesByGenre,
};
