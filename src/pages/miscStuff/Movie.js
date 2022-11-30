import { Link } from "react-router-dom"

function Movie({ movie }) {
    return (
        <>

            <Link to={`/movies/${movie.title}`}>
                <div style={{ "background": `url(${movie.posterPath}) no-repeat center center` }}>
                    <h1>{movie.title}</h1>
                    <h4>Released: {movie.releaseDate}</h4>
                </div>
            </Link>
        </>
    );
}

export default Movie;
