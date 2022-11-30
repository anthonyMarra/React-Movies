import { useParams } from "react-router-dom"
import { movies } from "../data.js";

function MovieDetails() {

    let { movieName } = useParams();
    let movie = movies.find(mov => mov.title === movieName)

    return (

        <>
            <h1>{movie.title}</h1>
            <h4>Released: {new Date(movie.release_date).toLocaleDateString()}</h4>
            <h3>Cast Members:</h3>
            <ul>
                {
                    movie.cast.map(actor => {
                        return <li key={actor}>{actor}</li>
                    })
                }
            </ul>
            <img src={`${movie.posterPath}`} />
        </>
    );
}

export default MovieDetails;
