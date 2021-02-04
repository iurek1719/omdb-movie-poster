import axios from 'axios';
import chunk from 'lodash.chunk';
import { getSpecificMovieData } from './movie-poster.action';

export const splitArrayIntoChunks = (array, numberOfChunks) => {
    return chunk(array, numberOfChunks);
}


export const fetchSpecificMovieData = async (imdb) => {
  

    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=c5a56bd1&i=${imdb}`);
        return response.data
    } catch (error) {
        console.log(error);
    }

}

