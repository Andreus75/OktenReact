import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Todo from "./components/todo/Todo";
import {ADD_TODO, DELETE_TODO} from "./redux/actions/actionTypes";

function App() {

    let {todo} = useSelector(state => state);
    let dispatch = useDispatch();
    console.log(todo);

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');


    function setTitleForm(e) {
        setTitle(e.target.value);
    }
    function setDescriptionForm(e) {
        setDescription(e.target.value);
    }

    let addTodo = (e) => {
        e.preventDefault();
        let todo = {title, description, id: Math.random()};
        dispatch({type: ADD_TODO, payload: todo})
    }
    let deleteTodo = (id) => {
        dispatch({type: DELETE_TODO, payload: id});
    };
    return (
    <div className="App">
      <div>
          <form onSubmit={addTodo}>
              <input type="text" name={'title'} value={title} onInput={setTitleForm}/>
              <input type="text" name={'description'} value={description} onInput={setDescriptionForm}/>
              <button>submit</button>
          </form>
          <div>
              <Todo todo={todo} deleteTodo={deleteTodo}/>
          </div>
      </div>
    </div>
  );
}

export default App;
