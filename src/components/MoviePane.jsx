import './MoviePane.css'

function MoviePane(props) {
    if (props.movie === null) {
        return "";
    }
    return (
        <div className="movieDetails">
            <img src={props.movie.Poster} alt="img text" id='poster'/>
            <div className="details">
                    <div className="title head">Title</div>
                    <div className="title value">: {props.movie.Title}</div>
                    <div className="writer head">Writer</div>
                    <div className="writer value">: {props.movie.Writer}</div>
                    <div className="director head">Director</div>
                    <div className="director value">: {props.movie.Director}</div>
                    <div className="imdb_rating head">IMDB Rating</div>
                    <div className="imdb_rating value">: {props.movie.imdbRating}</div>
                    <div className="year head">Year</div>
                    <div className="year value">: {props.movie.Year}</div>
            </div>
        </div>
     );
}

export default MoviePane;