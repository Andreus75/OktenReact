import {ADD_TODO, DELETE_TODO} from "../actions/actionTypes";

let reducer = (state = {todo : []}, action) => {
    switch (action.type) {
        case ADD_TODO :
            return {...state, todo: action.payload};
        case DELETE_TODO :

            return state;
        default :
            return state;
    }
}

export {reducer}