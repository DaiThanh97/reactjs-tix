import { GET_LIST_MOVIE } from "../constants/movie.constant"

const initialState = {
    listMovie: []
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_MOVIE:
            return { ...state, listMovie: payload }
        default:
            return { ...state }
    }
}

export default movieReducer;