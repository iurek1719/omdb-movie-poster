import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesList, selectIsDataFetching } from '../redux/movie-posters/movie-poster.selector';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieItem from '../movie-item/movie-item.component';
import { splitArrayIntoChunks } from '../redux/movie-posters/movie-poster.utils';
export const MoviesList = () => {
  const movieList = useSelector(moviesList);
  let chunkedArray = splitArrayIntoChunks(movieList, 4);
  
  return (
    <div className="movieList-container">

      {
       chunkedArray.map(arr =>(
          
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