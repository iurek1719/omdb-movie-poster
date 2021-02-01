import { MoviePosterTypes } from './movie-poster.types'

const INITIAL_STATE = {
    moviesList: [],
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
            case MoviePosterTypes.FETCH_MOVIE_POSTER_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    moviesList:action.payload
                }
        default: return state;
    }
}
export default moviePosterReducer;