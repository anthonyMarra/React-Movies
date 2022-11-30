import { Link } from "react-router-dom"

function Actor({ actor }) {
    return (
        <>
            <h4>{actor}</h4>
            <img src="https://picsum.photos/200/300" alt="alternatetext"></img>
            {/* no clue how to get many random images lol */}
        </>
    );
}

export default Actor;
