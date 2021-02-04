import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollectionAsync } from '../redux/movie-posters/movie-poster.action';
import './search.styles.scss';


export const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className="searchBar">
        <form className="form-inline" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => dispatch(fetchCollectionAsync(search))} >Search</button>
        </form>
</div>
    )
}