import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovieSelector, specificMovieData } from '../../components/redux/movie-posters/movie-poster.selector';
import { getSpecificMovieData } from '../../components/redux/movie-posters/movie-poster.action';
import './movie-details.styles.scss'
const MovieDetails = () => {
  let movieId = useSelector(selectedMovieSelector);
  let movieData = useSelector(specificMovieData);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificMovieData(movieId))
  }, [])



  console.log(movieData);


  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={movieData.Poster} />
            <h3>{movieData.Title}</h3>
            <h4>{movieData.Year}, {movieData.Director}</h4>
            <span class="minutes">{movieData.Runtime}</span>
            <p class="type">{movieData.Genre}</p>
          </div>
          <div class="movie_desc">
            <p class="text">
              {movieData.Plot}
            </p>
          </div>

        </div>
        <div class="blur_back bright_back"></div>
      </div>
    </div>

  );
};

export default MovieDetails;