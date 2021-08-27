import './App.css';
import {useReducer} from "react";
import reducer from "./reducer/reducer";

function App() {

  let [state, dispatch] = useReducer(reducer, {x: 0});
  let {x} = state;
  return (
    <div>
      <h1>Counter - {x}</h1>
        <button onClick={() => dispatch({diya: '+'})}>increase by 10</button>
        <button onClick={() => dispatch({diya: '-'})}>reduce by 2</button>
    </div>
  );
}

export default App;
