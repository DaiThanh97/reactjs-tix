import { GET_LIST_MOVIE, SHOW_TRAILER } from "../constants/movie.constant"

const initialState = {
    trailer: '',
    listMovie: []
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_MOVIE:
            return { ...state, listMovie: payload };
        case SHOW_TRAILER:
            return { ...state, trailer: payload };
        default:
            return { ...state }
    }
}

export default movieReducer;