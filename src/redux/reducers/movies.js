import { GET_MOVIE } from "../action/types";

const initialState = {
    data: []
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}

export default movies