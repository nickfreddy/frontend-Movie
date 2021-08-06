import { ADD_MOVIE, DELETE_MOVIE, LOAD_ALL_MOVIE } from "../action/types";

const initialState = {
    data: []
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_MOVIE:
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
            const afterDelete = state.movie.filter(item => item.id !== action.payload)
            return {
                ...state,
                movie: afterDelete
            }


        default:
            return state;
    }
}

export default movies