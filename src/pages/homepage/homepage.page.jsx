import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MoviesList } from '../../components/movies-list/movies-list.component';
import { Search } from '../../components/search/search.component';
import './homepage.styles.scss';
const Homepage = () => {
    const dispatch = useDispatch();
    // const fetching=useSelector(state=>state.isFetching);
    // useEffect(() => {
    //     dispatch(fetchCollectionAsync());
    // }, [])
    return (
        <div className="homepage-container">
            <Search />
            <MoviesList />
        </div>
    )
};

export default Homepage;
