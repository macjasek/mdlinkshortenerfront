import * as types from '../actions/actionTypes'

export default function pageReducer (state = 1, action){
    switch(action.type) {
        case types.CHANGE_PAGE:
            return action.page;
        default:
            return state;
    }
}
