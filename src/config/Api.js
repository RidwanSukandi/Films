import CONFIG from "./config";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const Api_Endpoints = {
  All: `${CONFIG.BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${CONFIG.KEY}`,
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  NOW_PLAYING2: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`,
  NOW_PLAYING3: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=3`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=4`,
  DETAIL: (id) =>
    `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}&append_to_response=credits`,
  GENRES: `${CONFIG.BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${CONFIG.KEY}&with_genres=10770`,
  CASTS: (id) => `${CONFIG.BASE_URL}movie/${id}/casts?api_key=${CONFIG.KEY}`,
  REVIEWS: `${CONFIG.BASE_URL}movie/10770/reviews?api_key=${CONFIG.KEY}`,
  SEARCH_MOVIE: (query) =>
    `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&query=${query}`,
  SIMILIAR: `${CONFIG.BASE_URL}movie/10770/similar?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
};

export default Api_Endpoints;
