import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/authors" className="nav-link">Список авторів</Link>
        </nav>
    );
}

export default Navbar;