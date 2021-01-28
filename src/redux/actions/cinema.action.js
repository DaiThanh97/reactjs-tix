import { GET_DETAIL_MOVIES_BY_CINEMA, GET_LIST_CINEMA } from "../constants/cinema.constant";

export const getListCinemaAct = (payload) => ({
    type: GET_LIST_CINEMA,
    payload
});

export const getDetailMoviesByCinemaAct = (payload) => ({
    type: GET_DETAIL_MOVIES_BY_CINEMA,
    payload
})

