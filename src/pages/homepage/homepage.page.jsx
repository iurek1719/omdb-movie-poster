import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesList } from '../../components/movies-list/movies-list.component';
import { fetchCollectionAsync } from '../../components/redux/movie-posters/movie-poster.action';
import { selectIsDataFetching } from '../../components/redux/movie-posters/movie-poster.selector';
import { Search } from '../../components/search/search.component';

const Homepage = () => {
    const dispatch = useDispatch();
    const fetching=useSelector(state=>state.isFetching);
    useEffect(() => {
        dispatch(fetchCollectionAsync());
    }, [])
    return (
        <div className="homepage-container">
            <Search />
            <MoviesList />
        </div>
    )
};

export default Homepage;
