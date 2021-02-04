import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './components/redux/root-reducer';
import { persistStore } from 'redux-persist';



export const store=configureStore({
    reducer:rootReducer,
    middleware:[logger,...getDefaultMiddleware()]
})

export const persistor=persistStore(store);