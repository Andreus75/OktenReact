import './App.css';
import Header from "./components/header/header";
import MoviesList from "./components/moviesList/moviesList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MovieInfo from "./components/movieInfo/movieInfo";
import {GlobalStyles} from "./components/globalStyles/globalStyles";
import {lightTheme, darkTheme} from "./components/themes/themes";
import {useState} from "react";
import {ThemeProvider} from "styled-components";

function App() {

    let [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light'?setTheme('dark'):setTheme('light');
    }

  return (
      <ThemeProvider theme={theme === 'light'?lightTheme : darkTheme}>
          <>
              <GlobalStyles/>
          <Router>
              <button className={'buttonChangeTheme'} onClick={themeToggler}>Switch Theme</button>
              <div className="App">
                  <div className={'main'}>
                      <div className={'header_poster_main'}>
                          <div>
                              <Header/>
                          </div>
                          <div className={'poster_previews'}>
                              <Route path={'/info/:id'} render={(props) => {
                                  return <MovieInfo {...props}/>
                              }}/>
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
      </>
      </ThemeProvider>

  );
}

export default App;
