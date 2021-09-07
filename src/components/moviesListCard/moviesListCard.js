import "./mobileListCard.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import PosterPreview from "../posterPreview/posterPreview";

export default function MoviesListCard ({movie}) {

    // let {poster_path, id} = movie;
    // const moInformation = (e) => {
    //     e.preventDefault();
    //     console.log({id});
    // }

    return (
            <div className={'img_movie'}>
                <Link to={{pathname:`/info/${movie.id}`, state: movie}}><PosterPreview movie={movie}/></Link>
            </div>

    );
}