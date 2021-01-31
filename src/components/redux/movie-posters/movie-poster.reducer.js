import { MoviePosterTypes } from './movie-poster.types'

const INITIAL_STATE = {
    moviePosterStorage: [],
    isFetching: false,
    errorMsg: null
}

const moviePosterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MoviePosterTypes.FETCH_MOVIE_POSTER_START:
            return {
                ...state,
                isFetching: true,

            }
        case MoviePosterTypes.FETCH_MOVIE_POSTER_FAILED:
            return {
                ...state,
                errorMsg: action.payload
            }
        default: return state;
    }
}