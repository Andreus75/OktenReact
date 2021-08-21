import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import './App.css';
import Cars from "./components/Cars";
import CreateCar from "./components/createCar/CreateCar";

function App() {
  return (
      <Router>
          <div className="App">
              <div className={'links'}>
                  <Link to={'all-cars'}>all-cars</Link>
                  <br/>
                  <Link to={'/create-car'}>Create car</Link>
                  <br/>
                  <Link to={'/even-cars'}>even-cars-page</Link>
                  <br/>
                  <Link to={'/odd-cars'}>odd-cars-page</Link>
              </div>

              <Switch>
                  <Route path={'/all-cars'} component={Cars}/>
                  <Route path={'/create-car'} render={() => {
                      return <CreateCar/>;
                  }}/>
                  <Route path={'/even-cars'} render={() => {
                      return <Cars url={'even'}/>
                  }}/>
                  <Route path={'/odd-cars'} render={() => {
                      return <Cars url={'odd'}/>
                  }}/>
                  <Route/>
              </Switch>

          </div>
      </Router>

  );
}

export default App;
