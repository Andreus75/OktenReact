import "./posterPrevies.css"

export default function PosterPreview ({movie}) {

    let {poster_path} = movie;

    return (
            <div>
                <img src= {'https://image.tmdb.org/t/p/w200'+poster_path}/>
            </div>
    );
}