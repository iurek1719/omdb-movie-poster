import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollectionAsync } from '../redux/movie-posters/movie-poster.action';



export const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <form class="form-inline" onSubmit={handleSubmit}>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => dispatch(fetchCollectionAsync(search))} >Search</button>
        </form>

    )
}