import './App.css';
import Header from "./components/header/header";
import PosterPreview from "./components/posterPreview/posterPreview";
import MoviesList from "./components/moviesList/moviesList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MovieInfo from "./components/movieInfo/movieInfo";

function App() {

  return (
      <Router>
          <div className="App">
              <div className={'main'}>
                  <div className={'header_poster_main'}>
                      <div>
                          <Header/>
                      </div>
                      <div className={'poster_previews'}>
                          <Route path={'/info/:id'} component={MovieInfo}/>
                      </div>
                      <div className={'movies_list'}>
                          <MoviesList/>
                      </div>
                  </div>
                  <div>

                  </div>
              </div>
          </div>
      </Router>

  );
}

export default App;
