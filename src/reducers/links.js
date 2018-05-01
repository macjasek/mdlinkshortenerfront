import { LINKS_LOADED } from '../actions/links.actions';

const links = (state = [], action) => {
    switch (action.type) {
        case LINKS_LOADED:
            return [...action.links];
        default:
            return state;
    }
}

export default links;