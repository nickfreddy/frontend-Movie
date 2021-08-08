import { GET_MOVIE, DELETE_MOVIE } from "./types"
import axios from "axios";

export const loadMovies = () => async (dispatch) => {
    try {
        const movies = await axios.get("https://demovie.gabatch13.my.id/movies?page=1&limit=15");
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

// export const addMovie = (e) => {
//     e.preventDefault()
//     if (movie === "") return;
//     const newMovie = {
//     }
// }

export const deletemovie = (id, token) => async (dispatch) => {
    try {
        const res = await axios.delete(`https://demovie.gabatch13.my.id/movies/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        await dispatch({
            type: DELETE_MOVIE,
            payload: id
        })
        console.log(id)
        console.log(res)
    } catch (error) {
        console.log({ error })
    }
}
