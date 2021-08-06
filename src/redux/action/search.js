import { GET_MOVIE } from "./types";
import axios from "axios";


export const searchMovieRdx = (searchValue) => async (dispatch) => {
    // const { searchValue } = action;
    // const searchValue = "";
    // console.log(action)
    try {
        const movies = await axios.get(`https://demovie.gabatch13.my.id/movies/search?title=${searchValue}&page=1&limit=5`);
        const dataResults = await movies.data;
        const data = await dataResults.dataMovie;
        console.log(data)
        dispatch({
            type: GET_MOVIE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_MOVIE,
            payload: []
        })
    }
};