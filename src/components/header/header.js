import "./header.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    discoverGenre,
    discoverMovie,
    discoverMoviePage,
    getKeywordsMovie,
    getTopMovies
} from "../../services/movieService";
import {ALL_MOVIES, FILTER_TO_GENRE, SEARCH_MOVIE, TOP_MOVIES} from "../../redux/actions/actionsType";
import logoFilm from "../../img/logoFilm.png";

export default function Header () {

    let {results} = useSelector(state => state);
    let dispatch = useDispatch();

     let [genres, setGenres] = useState();

    useEffect(() => {
        discoverGenre().then(value => {
            setGenres(value.data.genres);}
        );
    },[])


    let choseGenre = (e) => {
        const id_t = e.target.value;
        let id = Number(id_t);

        let moviesFilter = results.filter(value => value.genre_ids.some(value1 => value1 === id));
        dispatch({type: FILTER_TO_GENRE, payload: moviesFilter});
    }

    const getAllMoviesClick = (e) => {
        e.preventDefault();
        discoverMovie().then(value => {
            dispatch({type: ALL_MOVIES, payload: value.data.results});
        })
    }

    const getTopMoviesClick = (e) => {
        e.preventDefault();
        getTopMovies().then(value => {
            dispatch({type: TOP_MOVIES, payload: value.data.results})
        })
    }

    let [keyWorld] = useState('enter keyWorld');
    
    let searchMovie = (e) => {
        e.preventDefault();

        let filterResult = [];
        for (let i = 1; i <= 500; i++) {
            discoverMoviePage(i).then(value => {
                    for (let resultsAllElement of value.data.results) {
                        if ((resultsAllElement.overview).includes(e.target.keyWorlds.value) || (resultsAllElement.original_title).includes(e.target.keyWorlds.value)) {
                            // filterResults.push(resultsAllElement);
                            filterResult.push(resultsAllElement);
                        }
                    }
                dispatch({type: SEARCH_MOVIE, payload: filterResult});
                }
            )
        }

        // for (let result of results) {
        //     if ((result.overview).includes(e.target.keyWorlds.value) || (result.original_title).includes(e.target.keyWorlds.value)) {
        //                 filterResults.push(result);
        //             }
        // }
        // dispatch({type: SEARCH_MOVIE, payload: filterResult});
    }

    return (
            <div className={'header'}>
                <div className={'logo'}><img src={logoFilm} alt="LOGO"/></div>
                <div className={'header_content'}>
                    <select className={'select_genres'} onChange={choseGenre}>
                        {genres &&
                        genres.map(value =>
                            <option name="value" value={value.id}>
                                {value.id}.{value.name}
                            </option>
                        )
                        }
                    </select>
                    <button className={'button_all_movies'} onClick={getAllMoviesClick}>All movies</button>
                    <button className={'button_top_movies'} onClick={getTopMoviesClick}>Top movies</button>
                </div>

                <form className={'searchForm'} onSubmit={searchMovie}>
                    <input type="text" name={'keyWorlds'} placeholder={keyWorld}/>
                    <button className={'search_button'}>search</button>
                </form>
            </div>
    );
}