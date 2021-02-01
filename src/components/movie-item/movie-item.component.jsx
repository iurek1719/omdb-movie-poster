import React from 'react';

const MovieItem = ({ currentMovie }) => {
    console.log("kurcina");

    return (
        <div id={currentMovie.imdbID}>
        <img src={currentMovie.Poster} alt="image"/>
    </div>
    )

};
export default MovieItem;