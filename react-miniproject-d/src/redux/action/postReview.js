import {
    POST_REVIEW_BEGIN,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAIL
} from "./types";
import axios from "axios";

export const postReview = () => async (dispatch) => {
    dispatch({
        type: POST_REVIEW_BEGIN,
        loading: true,
        error: null,
    });
    try {
        const res = await axios.get('URL DARI BE');
        dispatch({
            type: POST_REVIEW_SUCCESS,
            loading: false,
            payload: res.data,
            error: null,
        });
    } catch (err) {
        dispatch({
            type: POST_REVIEW_FAIL,
            error: err.response,
        });
    }
};