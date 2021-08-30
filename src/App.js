import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addUser, getUsers} from "./services/userServices";
import {FETCH_USERS, PUSH_USER} from "./redux/actions/actionTypes";

function App() {

  let state = useSelector(state => state);
  let dispatch = useDispatch();
  let {users} = state;
  useEffect(() => {
    getUsers().then(value => {
      dispatch({type: FETCH_USERS, payload: value});
    });
  },[])

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [user, setUser] = useState({name: ''});
  let onInputName = (e) => {
    setName(e.target.value);
  }
  let onInputEmail = (e) => {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    let tempUser = {name, email};
    setUser({...tempUser});
    addUser(user).then(value => {
      dispatch({type: PUSH_USER, payload: value});
    }
        );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={'name'} value={name} onInput={onInputName}/>
        <input type="email" name={'email'} value={email} onInput={onInputEmail}/>
        <button>add user</button>
      </form>
      <hr/>
      {
        users.map((value) => <div>{value.name}</div>)
      }
    </div>
  );
}

export default App;
