import './movieInfo.css'

export default function MovieInfo (props) {

    let {location:{state}} = props;

    return (
        <div className={'movie_info'}>
            <div>
                original language - {state.original_language}
                <br/>
                original title - {state.original_title}
                <br/>
                popularity - {state.popularity}
                <br/>
                release date : {state.release_date}
                <br/>
                vote average - {state.vote_average}
                <br/>
                overview : {state.overview}
                <br/>
                vote_count : {state.vote_count}
            </div>
            <div className={'poster_movie_info'}>
                <img src= {'https://image.tmdb.org/t/p/w200'+state.poster_path}/>
            </div>
        </div>
    );
}