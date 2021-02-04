import axios from 'axios';
import chunk from 'lodash.chunk';
import { getSpecificMovieData } from './movie-poster.action';

export const splitArrayIntoChunks = (array, numberOfChunks) => {
    return chunk(array, numberOfChunks);
}



