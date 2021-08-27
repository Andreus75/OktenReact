const reducer = (state, action) => {
    switch (action.obj) {
        case 'a' :
            if (action.diya === '+'){
                return {...state, a: state.a++};
            }else if (action.diya === '-') {
                return {...state, a: state.a--};
            }
            break;
        case 'b' :
            if (action.diya === '+') {
                return {...state, b: state.b+10};
            }else if (action.diya === '-') {
                return {...state, b: state.b-10};
            }
            break;
        case 'c' :
            if (action.diya === '+') {
                return {...state, c: state.c+100};
            }else if (action.diya === '-') {
                return {...state, c: state.c-100};
            }
            break;
        default :
            return {...state};
    }
}

export default reducer;