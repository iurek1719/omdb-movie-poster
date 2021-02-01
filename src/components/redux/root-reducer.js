import {combineReducers} from 'redux'
import moviePosterReducer from './movie-posters/movie-poster.reducer';

const rootReducer=combineReducers({
    movieReducer:moviePosterReducer,
})

export default (rootReducer);