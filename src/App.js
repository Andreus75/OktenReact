import './App.css';
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="App">
        <div>
            <Users/>
        </div>

        <div className={'comments'}>
            <p>comment : </p>
            <Comments/>
        </div>

    </div>
  );
}

export default App;
