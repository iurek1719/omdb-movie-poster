import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage';

import moviePosterReducer from './movie-posters/movie-poster.action';
import { persistReducer } from 'redux-persist';

const persistConfig={
    key:'root',
    storage,
    whitelist:['movieReducer']
}

const rootReducer=combineReducers({
    movieReducer:moviePosterReducer,
})

export default persistReducer(persistConfig,rootReducer);