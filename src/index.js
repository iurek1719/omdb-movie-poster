import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store,persistor } from './store';

import 'bootstrap/dist/css/bootstrap.min.css'

import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

