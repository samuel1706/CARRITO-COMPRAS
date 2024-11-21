// src/redux/store.js
import { createStore } from 'redux';
import carritoReducer from './reducer';

const store = createStore(carritoReducer);

export default store;
