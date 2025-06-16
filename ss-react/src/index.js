import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';

// const store = createStore(reducers);
const store = configureStore({
  reducer: reducers,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <App />
  // </Provider>
);

reportWebVitals();