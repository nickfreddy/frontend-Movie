import { LOAD_ALL_MOVIE } from "./types"
import axios from "axios";

export const loadMovies = () => async (dispatch) => {
    try {
        const movies = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ba4ce5d35b9081ae360eeb355f0acda9");
        const dataResults = await movies.data;
        const data = await dataResults.results;
        console.log(data)
        dispatch({
            type: LOAD_ALL_MOVIE,
            payload: data
        })
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
};