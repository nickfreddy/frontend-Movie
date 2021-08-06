import axios from "axios";
import { LOAD_ALL_REVIEW } from "./types";


export const loadReview = () => async (dispatch) => {
    console.log("review masuk")
    try {
        const review = await axios.get('https://demovie.gabatch13.my.id/reviews');
        const data = await review.data.data;
        console.log(data)
        dispatch({
            type: LOAD_ALL_REVIEW,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

};