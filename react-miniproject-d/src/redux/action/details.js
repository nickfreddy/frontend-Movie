import {
    GET_DETAIL_BEGIN,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAIL, 
 }     from "../../store/actions/types";
 import axios from "axios";

 const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const GetDetail = (action) => async (dispatch) => {
    const {error, movies_id} = action;
    dispatch({
        type: GET_DETAIL_BEGIN,
        loading: true,
        error: null,
    });
    try {
        const res = await axios.get(`${BASE_URL}${movies_id}?api_key=4c2c9a58431c5b46e098bf4eed17c94b&language=en-US`);
        dispatch({
            type: GET_DETAIL_SUCCESS,
            loading: false,
            payload: res.data,
            error: null,
        });
    }catch (err){
        dispatch({
            type: GET_DETAIL_FAIL,
            error: error,
        });
    }
};