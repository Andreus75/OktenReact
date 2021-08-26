import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router>
          <div className="App">
              <div className={'links'}>
                  <Link to={'/users'}>users page</Link>
                  <Link to={'/posts'}>posts page</Link>
                  <Link to={'/comments'}>comments page</Link>
              </div>
              <div>
                  <Route path={'/users'} component={Users}/>
                  <Route path={'/posts'} component={Posts}/>
                  <Route path={'/comments'} component={Comments}/>
              </div>
          </div>
      </Router>

  );
}

export default App;
