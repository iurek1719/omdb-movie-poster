import {createSelector} from 'reselect'

export const movies=state=>state.movieReducer;

export const moviesList=createSelector(
    [movies],
    movies=>movies.moviesList
)

export const selectIsDataFetching=createSelector(
    [movies],
    movies=>movies.isFetching
)

export const selectedMovieSelector=createSelector(
    [movies],
    movies=>movies.selectedMovie
)