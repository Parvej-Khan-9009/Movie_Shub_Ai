export const BG_URL =
"https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg";

export const TMDB_IMAGE_ORIGIN = "https://image.tmdb.org/t/p/w500";

export const noMovieImage = "https://imgs.search.brave.com/5Xzxy63wcWsPwz9Ze_m1bFjSwPOLjtL7yv92mVqzXZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzg0Lzg4Lzc2/LzM2MF9GXzQ4NDg4/NzY4Ml9NeDU3d3BI/RzRsS3JQQUcweTdR/OFE3Yko5NTJKM1RU/Ty5qcGc"

export const AVATAR =
  "https://occ-0-3217-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const GET_API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_IMDB_KEY,
  }
};

export const POPULOR_ANIME_API = "https://api.themoviedb.org/3/discover/movie?with_genres=16&with_original_language=ja&language=en&sort_by=popularity.desc&certification_country=US&certification.lte=R&page=2"

export const KIDS_SHOW_API = "https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en&sort_by=popularity.desc&certification_country=US&certification.lte=R&page=7";

export const TRAILER_DATA_API = "https://api.themoviedb.org/3/movie/762509"

export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?&page=1"

export const MOVIE_DATABASE_API = "https://api.themoviedb.org/3/movie/"

export const SERIES_DATABASE_API = "https://api.themoviedb.org/3/tv/"

export const BOLLYWOOD_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?language=en&region=IN&with_original_language=hi&sort_by=popularity.desc&page=5"

export const KOREAN_DRAMA_API = "https://api.themoviedb.org/3/discover/movie?with_original_language=ko&language=en&sort_by=popularity.desc&certification_country=US&certification.lte=R&page=1"

export const HOLLYWOOD_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?language=en-US&page=3&region=IN&with_genres=28|12|35|18&without_genres=16&sort_by=popularity.desc"

export const TRENDING_SERIES = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"

export const MOVIE_SEARCH_API = "https://api.themoviedb.org/3/search/multi?language=en-US&query="

export const TOP_RATED_MOVIE_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

export const TRENDING_MOVIE_API = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=2"