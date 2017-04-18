import {combineReducers} from 'redux';
import {heroReducer} from './hero';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  heroReducer,
  routing: routerReducer
});

export default rootReducer;
