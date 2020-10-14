import { createStore } from 'redux';
import rootReducer from '../reducers';

// global store/ global state
const store = createStore(rootReducer);

export default store;