import { combineReducers } from 'redux';
import links from './links';
import page from './pageReducer';

const rootReducer = combineReducers({
    links,
    page
});

export default rootReducer;