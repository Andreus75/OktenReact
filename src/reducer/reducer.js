const reducer = (state, action) => {
    switch (action.diya) {
        case '+':
            return {...state, x: state.x+10};
        case '-':
            return {...state, x: state.x-2};
        default:
            return {...state};
    }
}

export default reducer;