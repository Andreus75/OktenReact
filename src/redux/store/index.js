import {createStore} from 'redux'
import {moviesReducer} from "../reducer/reducer";

export const store = createStore(moviesReducer);