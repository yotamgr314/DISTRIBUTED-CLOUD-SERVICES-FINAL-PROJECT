const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// Generic fetch wrapper
const fetchFromTMDB = async (endpoint) => {
  const url = `${TMDB_BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }

  return await response.json();
};

// Specific endpoints
const getTrending = () => fetchFromTMDB("/trending/all/day");
const getPopularMovies = () => fetchFromTMDB("/movie/popular");
const getPopularTV = () => fetchFromTMDB("/tv/popular");
const getNewReleases = () => fetchFromTMDB("/movie/now_playing");

module.exports = {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getNewReleases,
};
