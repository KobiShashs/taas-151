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
            <Link to="/todos/add">Add Task</Link>
            {/* <Link to="/todos/delete/12345">Delete Task</Link>
            <Link to="/todos/edit/12345">Edit Task</Link> */}
        </div>
    );
}

export default Menu;
