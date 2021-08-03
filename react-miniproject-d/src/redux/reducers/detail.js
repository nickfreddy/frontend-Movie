import {
    GET_DETAIL_BEGIN,
    GET_DETAIL_FAIL,
    GET_DETAIL_SUCCESS,
    POST_REVIEW_BEGIN,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAIL,
} from "../action/types";

const initialState = {
    detail:[],
    loading: false,
    error: null,
    post:{
        loading:false,
        error:null,
    },
};

const reducerDetail = (state = initialState, action) => {
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
        case GET_DETAIL_BEGIN:
            return {
                ...state,
                loading: true,
                    error: false
            };
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                detail: payload,
                    loading: false,
                    error: false,
            };
        case GET_DETAIL_FAIL:
            return {
                ...state,
                detail: [],
                    loading: false,
                    error: error,
            };
        case POST_REVIEW_BEGIN:
            return {
                ...state,
                post: {
                    loading: true,
                },
            };
        case POST_REVIEW_SUCCESS:
            return {
                ...state,
                post: {
                    loading: true,
                    error: false,
                },
            };
        case POST_REVIEW_FAIL:
            return {
                ...state,
                post: {
                    loading: false,
                    error: false,
                },
            };
    }
};

export default reducerDetail;