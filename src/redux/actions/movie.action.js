import { GET_LIST_MOVIE, SHOW_TRAILER } from "../constants/movie.constant";

export const getListMovieAct = payload => ({
    type: GET_LIST_MOVIE,
    payload
});

export const showTrailerAct = payload => ({
    type: SHOW_TRAILER,
    payload
});
