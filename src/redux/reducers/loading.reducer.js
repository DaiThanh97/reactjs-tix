import { SHOW_LOADING } from "../constants/loading.constant";

const initialState = {
    isLoading: true
}

const loadingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_LOADING:
            return { ...state, isLoading: payload }
        default:
            return { ...state }
    }
}

export default loadingReducer;