import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchCollectionAsync = (movieName = '') => {
    movieName === '' ? movieName = 'Django' : movieName = movieName
    return dispatch => {
        dispatch(fetchMoviePosterStart());
        axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&s=${movieName}&plot=full`)
            .then(response => dispatch(fetchMoviePosterSucces(response.data.Search)))
            .catch(error => dispatch(fetchMoviePosterFailed(error)))
    }
}




export const getSpecificMovieData=createAsyncThunk(
    'fetchSpecificMovieData',
    async(imdb)=>{
        const response=await axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&i=${imdb}`)
        return response.data
    }
)


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: [],
        isFetching: false,
        errorMsg: null,
        selectedMovie: '',
        specificMovieData: []
    },
    reducers: {
        fetchMoviePosterStart(state) {
            state.isFetching = true;
        },
        fetchMoviePosterSucces(state, action) {
            state.moviesList = action.payload;
            state.isFetching = false;
            state.errorMsg = null;
        },
        fetchMoviePosterFailed(state, action) {
            state.isFetching = false;
            state.errorMsg = action.payload
        },
        fetchSpecificMovieData(state, action) {
            state.specificMovieData = action.payload;
        },
        selectedMovie(state, action) {
            state.selectedMovie = action.payload;
        }


    },
    extraReducers:{
        [getSpecificMovieData.fulfilled]:(state,action)=>{
            state.specificMovieData=action.payload
        }
    }
})
export const { fetchMoviePosterStart,fetchMoviePosterSucces, fetchSpecificMovieData, selectedMovie, fetchMoviePosterFailed } = movieSlice.actions
export default movieSlice.reducer;





