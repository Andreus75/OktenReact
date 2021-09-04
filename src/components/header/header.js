import "./header.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie, getTopMovies} from "../../services/movieService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MovieInfo from "../movieInfo/movieInfo";

export default function Header () {

    let {results} = useSelector(state => state);
    let dispatch = useDispatch();

     let [genres, setGenres] = useState();

    useEffect(() => {
        discoverGenre().then(value => setGenres(value.data.genres)
        );
    },[])

    let choseGenre = (e) => {
        const id_t = e.target.value;
        let id = Number(id_t);
        // console.log(id);
    }

    const getAllMoviesClick = () => {
    //     discoverMovie().then(value => {
    //         dispatch({type: 'ALL_MOVIES', payload: value.data.results});
    //     })
    }

    const getTopMoviesClick = () => {

    }

    // console.log(results);
    return (
            <div className={'header'}>
                <div className={'logo'}>logo</div>
                <div className={'header_content'}>
                    <select className={'select_genres'} onChange={choseGenre}>
                        {genres &&
                        genres.map(value =>
                            <option name="value" value={value.id}>
                                {value.name}
                            </option>
                        )
                        }
                    </select>
                    <button className={'button_all_movies'} onClick={getAllMoviesClick}>All movies</button>
                    <button className={'button_top_movies'} onClick={getTopMoviesClick}>Top movies</button>

                        <input type="search" placeholder={'search the movie'}/>
                        <button className={'search_button'}>search</button>

                </div>

            </div>
    );
}