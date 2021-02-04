import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovieSelector,specificMovieData } from '../redux/movie-posters/movie-poster.selector';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getSpecificMovieData } from '../redux/movie-posters/movie-poster.action';
const MovieDetails = () => {
  let movieId = useSelector(selectedMovieSelector);
  let movieData = useSelector(specificMovieData);
  let dispatch=useDispatch();

useEffect(()=>{
  dispatch(getSpecificMovieData(movieId))
},[] )






  return (
    <div>
      <Row>
        <Col>{movieData.Actors}</Col>
      </Row>
    </div>

  );
};

export default MovieDetails;