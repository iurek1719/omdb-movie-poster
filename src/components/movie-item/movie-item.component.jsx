import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { selectedMovie } from '../redux/movie-posters/movie-poster.action';
import './movie-item.styles.scss';
const MovieItem = ({ currentMovie }) => {
    let history = useHistory();
    let dispatch=useDispatch();

    
    return (
        <div onClick={()=>(history.push(`/MovieDetails/${currentMovie.imdbID}`),dispatch(selectedMovie(currentMovie.imdbID)))} className="posters" id={currentMovie.imdbID}>
        <img src={currentMovie.Poster} alt={currentMovie.Title}/>
    </div>
    )

};
export default MovieItem;