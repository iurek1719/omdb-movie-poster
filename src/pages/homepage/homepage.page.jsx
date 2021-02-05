import React, { useEffect } from 'react';
import { MoviesList } from '../../components/movies-list/movies-list.component';
import { Search } from '../../components/search/search.component';
import './homepage.styles.scss';
const Homepage = () => {
    return (
        <div className="homepage-container">
            <Search />
            <MoviesList />
        </div>
    )
};

export default Homepage;
