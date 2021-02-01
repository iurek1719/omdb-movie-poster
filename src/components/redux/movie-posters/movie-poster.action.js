import axios from 'axios'
import {MoviePosterTypes} from './movie-poster.types'

export const fetchCollectionStart=()=>({
    type:MoviePosterTypes.FETCH_MOVIE_POSTER_START
})


export const fetchCollectionSuccess=(collection)=>({
    type:MoviePosterTypes.FETCH_MOVIE_POSTER_SUCCESS,
    payload:collection
})

export const fetchCollectionError=(msg)=>({
    action:MoviePosterTypes.FETCH_MOVIE_POSTER_FAILED,
    payload:msg
})

export const fetchCollectionAsync=()=>{
   return dispatch=>{
       dispatch(fetchCollectionStart());
       axios.get('http://www.omdbapi.com/?apikey=c5a56bd1&s=inception')
       .then(response=>dispatch(fetchCollectionSuccess(response.data.Search),console.log(response.data.Search)))
       
       .catch(error=>dispatch(fetchCollectionError(error)))
   } 
}