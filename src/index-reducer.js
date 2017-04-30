import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import home from './home/home.reducer';
import photos from './photos/photos.reducer';

export default combineReducers({
    routing: routerReducer,
    home,
    photos
});