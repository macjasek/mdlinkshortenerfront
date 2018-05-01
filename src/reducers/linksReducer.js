import * as types from '../actions/actionTypes'

const links = (state = [], action) => {
    switch (action.type) {
        case types.LINKS_LOADED:
            return [...action.links];
        default:
            return state;
    }
}

export default links;