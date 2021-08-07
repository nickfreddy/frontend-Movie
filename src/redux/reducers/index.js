import { combineReducers } from "redux";
import movies from "./movies";
import user from "./user"
import reducerDetail from "./details";
import reducerPost from "./postReview";
import review from "./UserReview"
// import reducerMovieDetail from "./movieDetail";


const rootReducers = combineReducers({
    movies,
    user,
    reducerDetail,
    reducerPost,
    review
    // reducerMovieDetail,

})
export default rootReducers;