import "./mobileListCard.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MovieInfo from "../movieInfo/movieInfo";

export default function MoviesListCard ({movie}) {

    let {poster_path, id} = movie;
    const moInformation = (e) => {
        e.preventDefault();
        console.log({id});
    }

    return (
        <Router>
            <div className={'img_movie'}>
                <Link to={'/movie-info'}><img src= {'https://image.tmdb.org/t/p/w200'+poster_path}/></Link>
                    {/*<Link to={'/movie-info'}>info</Link>*/}
                <Route path={'/movie-info'} component={MovieInfo}/>
            </div>
        </Router>

    );
}