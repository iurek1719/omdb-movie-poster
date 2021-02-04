import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovieSelector } from '../redux/movie-posters/movie-poster.selector';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchSpecificMovieData } from '../redux/movie-posters/movie-poster.utils';
const MovieDetails = () => {
  let movieId = useSelector(selectedMovieSelector);






  return (
    <div>
      <Row>
        <Col>2 of 2</Col>
      </Row>
    </div>

  );
};

export default MovieDetails;