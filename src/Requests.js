const key = "08abeee0493f302935b4c5adeb55c954";

const requests = {
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1`,
}

export default requests