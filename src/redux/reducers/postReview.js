import {
    POST_REVIEW_BEGIN,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAIL
} from "../action/types";

const initialState = {

    review: [],
    loading: false,
    error: null,

};


const reducerPost = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;
    switch (type) {
        default:
            return {
                ...state,
            };

        case POST_REVIEW_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case POST_REVIEW_SUCCESS:
            return {
                ...state,

                review: payload,
                    loading: false,
                    error: null,

            };
        case POST_REVIEW_FAIL:
            return {
                ...state,
                review: [],
                    loading: false,
                    error: error,

            };
    }
};

export default reducerPost;