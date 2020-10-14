import { combineReducers } from 'redux';
import ListReducer from './ListReducers';

export default combineReducers({
    lists: ListReducer
});