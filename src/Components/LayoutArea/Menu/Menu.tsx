import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {/* <a href="home">Home</a>
            <a href="todos">Todos</a>
            <a href="about">About</a>
            <a href="donate">Donate</a> */}
            <Link to="/home">Home</Link>
            <Link to="/todos">Todos</Link>
            <Link to="/about">About</Link>
            <Link to="/donate">Donate</Link>
        </div>
    );
}

export default Menu;
