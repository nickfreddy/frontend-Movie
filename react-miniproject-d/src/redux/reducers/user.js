const initialState = {
    id: "",
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USER":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default user;