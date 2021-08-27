const reducer = (state, action) => {
    if (action.obj === 'x' && action.diya === '+') {
        return {...state, x: state.x+10};
    }else if (action.obj === 'x' && action.diya === '-') {
        return {...state, x: state.x-2};
    }
    return {...state};
}

export default reducer;