import { movies } from "../data.js";

import Movie from "./miscStuff/Movie"



function MoviesList() {
    return (<>
        {movies.map((movie) => (
            <Movie movie={movie} />
        ))}
    </>)
}

export default MoviesList;
