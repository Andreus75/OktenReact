import {CLEAR_USERS, FETCH_USERS, PUSH_USER, SET_USERS} from "../actions/actionTypes";

let initialState = {users: []};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS :
            return {...state, users: [...action.payload]};
        case CLEAR_USERS :
            return {...state, users: []};
        case SET_USERS :
            return {...state, users: [...action.payload]};
        case PUSH_USER :
            console.log('aaa',action.payload);
            return {...state, users: [...state.users, action.payload]};
        default :
            return state;
    }
}