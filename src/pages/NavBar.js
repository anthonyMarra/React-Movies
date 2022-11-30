import { NavLink } from "react-router-dom";


function NavBar({ profile }) {
    return (
        <>
            <NavLink to="/">
                <button>Movies</button>
            </NavLink>
            <NavLink to="/actors">
                <button>Actors</button>
            </NavLink>
            <p>Welcome, {profile}!</p>
        </>
    );
}

export default NavBar;