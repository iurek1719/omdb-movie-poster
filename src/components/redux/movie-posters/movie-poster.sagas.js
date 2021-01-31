import { takeEvery, call, take, put } from 'redux-saga/effects';
import { MoviePosterTypes } from './movie-poster.types';
import { fetchCollectionError, fetchCollectionStart, fetchCollectionSuccess } from './movie-poster.action';
import axios from 'axios';

export function* fetchCollectionAsync(movieName) {
    yield call(fetchCollectionStart);
    try {
        const fetchedData = yield axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&s=${movieName}`);
        yield put(fetchCollectionSuccess(fetchedData));
    } catch (error) {
        yield put(fetchCollectionError(error))
    }
}

export function* fetchCollectionStart(movieName) {
    yield takeEvery(MoviePosterTypes.FETCH_MOVIE_POSTER_START, fetchCollectionAsync(movieName))
}