const initialState = {
    data: []
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_MOVIE":
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}

export default movies