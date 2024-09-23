import {createStore}  from 'redux';
import counterReducer from '../reducer/counterReducer';
import rootReducer from '../reducer/rooReducer';


const store = createStore(rootReducer);

export default store;