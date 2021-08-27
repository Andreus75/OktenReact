import './App.css';
import {useReducer} from "react";
import reducer from "./reducer/reducer";

function App() {

    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div>
            <h1>counter1 - {a}</h1>
            <button onClick={() => dispatch({obj: 'a', diya: '+'})}>increase by 1</button>
            <button onClick={() => dispatch({obj: 'a', diya: '-'})}>reduce by 1</button>
            <h1>counter1 - {b}</h1>
            <button onClick={() => dispatch({obj: 'b', diya: '+'})}>increase by 10</button>
            <button onClick={() => dispatch({obj: 'b', diya: '-'})}>reduce by 10</button>
            <h1>counter1 - {c}</h1>
            <button onClick={() => dispatch({obj: 'c', diya: '+'})}>increase by 100</button>
            <button onClick={() => dispatch({obj: 'c', diya: '-'})}>reduce by 100</button>
        </div>
    );
}

export default App;
