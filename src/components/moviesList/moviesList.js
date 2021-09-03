import {useEffect} from "react";
import {getTopMovies} from "../../services/movieService";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/moviesListCard";
import "./moviesList.css";

export default function MoviesList () {

    let {results} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        getTopMovies().then(value => {
            dispatch({type: 'TOP_MOVIES', payload: value.data.results})
        })
    },[])

    return (
        <div className={'movies_poster'}>
            {
                results.map(value => <MoviesListCard key={value.id} movie={value}/>)
            }
        </div>
    );
}