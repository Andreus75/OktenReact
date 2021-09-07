import './movieInfo.css'
import {useEffect, useState} from "react";
import {getDetailsMovie} from "../../services/movieService";


export default function MovieInfo (props) {

    let [state, setState] = useState({});
    let {match:{params:{id}}} = props;

    useEffect(() => {
        getDetailsMovie(id).then(value => setState(value));
    },[id])

    let {data} = state;

    return (
        <div className={'movie_info'}>
            <div>
                original language - {data.original_language}
                <br/>
                original title - {data.original_title}
                <br/>
                popularity - {data.popularity}
                <br/>
                release date : {data.release_date}
                <br/>
                vote average - {data.vote_average}
                <br/>
                vote_count : {data.vote_count}
                <hr/>
                <br/>
                overview : {data.overview}
            </div>
            <div className={'poster_movie_info'}>
                <img src= {'https://image.tmdb.org/t/p/w400'+data.backdrop_path}/>
            </div>
        </div>
    );
}