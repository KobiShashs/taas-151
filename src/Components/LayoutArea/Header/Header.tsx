import { Link } from "react-router-dom";
import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";

function Header(): JSX.Element {
    return (
        <div className="Header row">
            <Link to="home"><Logo /></Link>
            <h1>Todo App</h1>

            <AuthMenu />
        </div>
    );
}

export default Header;
