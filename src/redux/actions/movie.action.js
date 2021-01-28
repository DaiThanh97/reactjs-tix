import { GET_LIST_MOVIE } from "../constants/movie.constant";

export const getListMovieAct = (payload) => ({
    type: GET_LIST_MOVIE,
    payload
});
