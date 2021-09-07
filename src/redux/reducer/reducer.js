let moviesReducer = (state = {results: []}, action) => {
    switch (action.type) {
        case "GET_INFO" :
            return {...state, results: action.payload};
        case "GET_GENRE" :
            return {...state, results: action.payload};
        case "ALL_MOVIES" :
            return {...state, results: action.payload};
        case "TOP_MOVIES" :
            return {...state, results: action.payload};
        case "FILTER_TO_GENRE" :
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