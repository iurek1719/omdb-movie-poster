import React from 'react';
import { useSelector } from 'react-redux';
import { moviesList,  } from '../redux/movie-posters/movie-poster.selector';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieItem from '../movie-item/movie-item.component';
import { splitArrayIntoChunks } from '../redux/movie-posters/movie-poster.utils';


import './movie-list.styles.scss';
export const MoviesList = () => {
  const movieList = useSelector(moviesList);
  let chunkedArray = splitArrayIntoChunks(movieList, 4);
  return (
    <div className="movieList-container">
      {chunkedArray.map(arr => (

        <Row>
          {arr.map(movie => (

            <Col>
              <MovieItem key={movie.imdbID} currentMovie={movie} />
            </Col>

          ))}</Row>
      ))}
    </div>
  )
}