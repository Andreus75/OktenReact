import './App.css';
import Header from "./components/header/header";
import PosterPreview from "./components/posterPreview/posterPreview";
import MoviesList from "./components/moviesList/moviesList";


function App() {

  return (   
    <div className="App">
        <div className={'main'}>
            <div className={'header_poster_main'}>
                <div>
                    <Header/>
                </div>
                <div className={'poster_previes'}>
                    <PosterPreview/>
                </div>
                <div className={'movies_list'}>
                    <MoviesList/>
                </div>
            </div>
            <div>

            </div>
        </div>



    </div>
  );
}

export default App;
