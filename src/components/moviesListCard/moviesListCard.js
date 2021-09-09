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

    return (
            <div className={'img_movie'}>
                <Link to={{pathname:`/info/${movie.id}`, state: movie}}><PosterPreview movie={movie}/></Link>
            </div>

    );
}