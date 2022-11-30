import { movies } from "../data.js";

import Actor from "./miscStuff/Actor"


function ActorList() {
    let actorsArrayLike = []
    movies.forEach(function (movie) {
        actorsArrayLike = [...actorsArrayLike, ...movie.cast]
        console.log(actorsArrayLike)
    })
    actorsArrayLike = new Set(actorsArrayLike);
    const actors = Array.from(actorsArrayLike);
    console.log(actors)

    return (<>
        {actors.map((actor) => (
            <Actor actor={actor} />
        ))}
    </>)
}

export default ActorList;
