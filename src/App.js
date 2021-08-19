import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import './App.css';
import Cars from "./components/Cars";

function App() {
  return (
      <Router>
        <div className="App">
          <Link to={'/evenCars'}>even-cars-page</Link>
            <br/>
          <Link to={'/oddCars'}>odd-cars-page</Link>

          <Route path={'/evenCars'} render={() => {
              return <Cars url={'even'}/>
          }}/>
          <Route path={'/oddCars'} render={() => {
              return <Cars url={'odd'}/>
          }}/>
          <Route/>
        </div>
      </Router>

  );
}

export default App;
