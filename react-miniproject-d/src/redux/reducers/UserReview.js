import { LOAD_ALL_REVIEW } from "../action/types";


const intialState = {
    data: []
};

const review = (state = intialState, action) => {
    switch (action.type) {
        case LOAD_ALL_REVIEW:
            return {
                ...state,
                data: action.payload
            }
    }
}

