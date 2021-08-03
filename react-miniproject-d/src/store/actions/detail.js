import {
    GET_DETAIL_BEGIN,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAIL, 
    POST_REVIEW_BEGIN,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAIL,
 }     from "./types";
 import axios from "axios";

 const BASE_URL = "https://api.themoviedb.org/3/movie/";

 export const getDetail = (id) => async (dispatch) => {
     dispatch({
         type: GET_DETAIL_BEGIN,
         loading: true,
         error: null,
     });
     try {
         const res = await axios.get(`${BASE_URL}+${id}+?api_key=4c2c9a58431c5b46e098bf4eed17c94b&language=en-US`);
         dispatch({
             type: GET_DETAIL_SUCCESS,
             loading: false,
             payload: res.data,
             error: null,
         });
     }catch (err){
         dispatch({
             type: GET_DETAIL_FAIL,
             error: err.response,
         });
     }
 };
 
 export const postReview = (body) => async (dispatch) => {
    dispatch({
        type: POST_REVIEW_BEGIN,
        loading: true,
        error: null,
    });
    try {
        const res = await axios.post("url/", body);
        console.log(res);
        dispatch({
            type: POST_REVIEW_SUCCESS,
            loading: false,
            error: null,
        });
    }catch (err){
        dispatch({
            type: POST_REVIEW_FAIL,
            error: err.response,
        });
    }
};
