import { GET_MOVIE } from "./types"
import axios from "axios";

export const loadMovies = () => async (dispatch) => {
    try {
        const movies = await axios.get("https://demovie.gabatch13.my.id/movies?page=1&limit=0");
        const dataResults = await movies.data;
        const data = await dataResults.dataMovie;
        console.log(data)
        dispatch({
            type: GET_MOVIE,
            payload: data
        })
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
};


