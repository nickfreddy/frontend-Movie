import {
    GET_MOVIE_DETAIL_BEGIN,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_MOVIE_DETAIL_FAIL,
  } from "../actions/types";
  
  const initialState = {
    detailMovie: {
      detail: [],
      loading: false,
      error: null,
    },
  };
  
  const reducerMovieDetail = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_MOVIE_DETAIL_BEGIN:
        return {
          detailMovie: {
            loading: true,
          },
        };
      case GET_MOVIE_DETAIL_SUCCESS:
        return {
          detailMovie: {
            detail: [],
            loading: false,
            error: null,
          },
        };
      case GET_MOVIE_DETAIL_FAIL:
        return {
          detailMovie: {
            detail: [],
            loading: false,
            error: error,
          },
        };
    }
  };
  
  export default reducerMovieDetail;
  