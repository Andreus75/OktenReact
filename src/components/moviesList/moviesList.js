import {useEffect} from "react";
import {discoverMoviePage, getTopMovies} from "../../services/movieService";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/moviesListCard";
import "./moviesList.css";
import {NEX_PAGE, PREVIOUS_PAGE, TOP_MOVIES} from "../../redux/actions/actionsType";

export default function MoviesList () {

    let {results} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        getTopMovies().then(value => {
            dispatch({type: TOP_MOVIES, payload: value.data.results})
        })
    },[])
let countPage = 1;

    let addCountPage = () => {
        countPage++;
        console.log(countPage);
        discoverMoviePage(countPage).then(value => {
            console.log(value.data.results);
            dispatch({type: NEX_PAGE, payload: value.data.results});
        })
    }
    let subtractCountPage = () => {
        countPage--;
        console.log(countPage);
        discoverMoviePage(countPage).then(value => {
            console.log(value.data.results);
            dispatch({type: PREVIOUS_PAGE, payload: value.data.results});
        })
    }
    return (
        <div>
            <div className={'button_move_pages'}>
                <button onClick={subtractCountPage}>previous page</button>
                Page : {countPage}
                <button onClick={addCountPage}>next page</button>
            </div>
            <div className={'movies_poster'}>
                {
                    results.map(value => <MoviesListCard key={value.id} movie={value}/>)
                }
            </div>
        </div>
    );
}