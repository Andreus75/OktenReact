import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
      <Router>
          <div className="App">
              <div>
                  <Link to={'/users'}>users page</Link>
              </div>
              <div>
                  <Route path={'/users'} component={Users}/>
              </div>
          </div>
      </Router>

  );
}

export default App;
