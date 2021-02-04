import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'



export const fetchCollectionAsync = createAsyncThunk(
    'fetchCollectionAsync',
    async (movieName) => {
        try {
            fetchMoviePosterStart();
            const response = await axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&s=${movieName}`);
            return response.data.Search
        } catch (error) {
            fetchMoviePosterFailed(error);
        }
    }
)



export const getSpecificMovieData = createAsyncThunk(
    'fetchSpecificMovieData',
    async (imdb) => {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&i=${imdb}`)
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
    extraReducers: {
        [getSpecificMovieData.fulfilled]: (state, action) => {
            state.specificMovieData = action.payload
        },
        [fetchCollectionAsync.fulfilled]: (state, action) => {
            state.moviesList = action.payload;
            state.isFetching = false;
            state.errorMsg = null;
        }
    }
})
export const { fetchMoviePosterStart, fetchMoviePosterSucces, fetchSpecificMovieData, selectedMovie, fetchMoviePosterFailed } = movieSlice.actions
export default movieSlice.reducer;





