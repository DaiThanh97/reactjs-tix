import { GET_DETAIL_MOVIES_BY_CINEMA, GET_LIST_CINEMA } from "../constants/cinema.constant";

const initialState = {
    listCinema: [],
    listDetailMoviesByCinema: []
}

const cinemaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_CINEMA:
            return { ...state, listCinema: payload }
        case GET_DETAIL_MOVIES_BY_CINEMA:
            return { ...state, listDetailMoviesByCinema: payload }
        default:
            return { ...state }
    }
}

export default cinemaReducer;
