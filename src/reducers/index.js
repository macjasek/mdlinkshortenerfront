import { combineReducers } from 'redux';
import links from './linksReducer';
import page from './pageReducer';

const rootReducer = combineReducers({
    links,
    page
});

export default rootReducer;