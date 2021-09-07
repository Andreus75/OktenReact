import {useEffect, useState} from "react";
import {discoverMoviePage, getTopMovies} from "../../services/movieService";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/moviesListCard";
import "./moviesList.css";
import {NEX_PAGE, PREVIOUS_PAGE, TOP_MOVIES} from "../../redux/actions/actionsType";

export default function MoviesList () {

    let {results} = useSelector(state => state);
    let dispatch = useDispatch();
    let [page, setPage] = useState(1);

    useEffect(() => {
        getTopMovies().then(value => {
            dispatch({type: TOP_MOVIES, payload: value.data.results})
        })
    },[])

    useEffect(() => {
        if (page < 1){
            setPage(500);
        }else if (page > 500){
            setPage(1);
        }
            discoverMoviePage(page).then(value => {
                dispatch({type: NEX_PAGE, payload: value.data.results});
            });
    },[page])

    return (
        <div>
            <div className={'button_move_pages'}>
                <button onClick={() => setPage(prevState => prevState - 1)}>previous page</button>
                Page : {page}
                <button onClick={() => setPage(prevState => prevState + 1)}>next page</button>
            </div>
            <div className={'movies_poster'}>
                {
                    results.map(value => <MoviesListCard key={value.id} movie={value}/>)
                }
            </div>
        </div>
    );
}