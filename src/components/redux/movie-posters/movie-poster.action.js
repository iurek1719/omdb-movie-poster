import {MoviePosterTypes} from './movie-poster.types'

export const fetchCollectionStart=()=>({
type: MoviePosterTypes.FETCH_MOVIE_POSTER_START
})

export const fetchCollectionSuccess=(collection)=>({
    type=MoviePosterTypes.FETCH_MOVIE_POSTER_SUCCESS,
    payload:collection
})

export const fetchCollectionError=(msg)=>({
    action:MoviePosterTypes.FETCH_MOVIE_POSTER_FAILED,
    payload:msg
})