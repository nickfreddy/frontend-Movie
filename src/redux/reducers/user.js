import { DETAIL_USER } from "../action/types";

const initialState = {
    id: "",
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_USER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default user;