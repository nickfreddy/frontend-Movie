import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIE } from "../action/types";

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
        case ADD_MOVIE:
            const { id, movie } = action.payload
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: id,
                        movie: movie
                    }
                ]
            }
        case DELETE_MOVIE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            }


        default:
            return state;
    }
}


export default movies