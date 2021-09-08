import {
    ALL_MOVIES,
    FILTER_TO_GENRE,
    GET_GENRE,
    GET_INFO,
    NEX_PAGE,
    PREVIOUS_PAGE,
    TOP_MOVIES
} from "../actions/actionsType";

let moviesReducer = (state = {results: []}, action) => {
    switch (action.type) {
        case GET_INFO :
            return {...state, results: action.payload};
        case GET_GENRE :
            return {...state, results: action.payload};
        case ALL_MOVIES :
            return {...state, results: action.payload};
        case TOP_MOVIES :
            return {...state, results: action.payload};
        case FILTER_TO_GENRE :
            return {...state, results: action.payload};
        case NEX_PAGE :
            return {...state, results: action.payload};
        case PREVIOUS_PAGE :
            return {...state, results: action.payload};
        case "SEARCH_MOVIE" :
            return {...state, results: action.payload};
        default :
            return state;
    }
}

let genresReducer = (state = {genres: []}, action) => {
    switch (action.type) {

    }
}

export {moviesReducer};