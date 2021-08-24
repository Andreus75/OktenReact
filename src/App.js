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

export default function App() {
  return (
      <Router>
          <div className="App">
                  <ul>
                      <li><Link to={'/users'}>users-page</Link></li>
                      <li><Link to={'/posts'}>posts-page</Link></li>
                      <li><Link to={'/comments'}>comments-page</Link></li>
                  </ul>
              <Switch>
                  <Route path={'/users'}>
                      <h3>Users : </h3>
                      <Users/>
                  </Route>

                  <Route path={'/posts'} render={() => {
                      return <Posts/>;
                  }}/>
                  <Route path={'/comments'} component={Comments}/>
              </Switch>
          </div>
      </Router>
);
}

