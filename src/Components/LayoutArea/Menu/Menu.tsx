import { Link } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import store from "../../../Redux/Store";

function Menu(): JSX.Element {
    const [user, setUser] = useState(store.getState().userReducer.user);

    useEffect(() => {
        return store.subscribe(() => setUser(store.getState().userReducer.user));
}, []);
return (
    <div className="Menu">
        {/* <a href="home">Home</a>
            <a href="todos">Todos</a>
            <a href="about">About</a>
            <a href="donate">Donate</a> */}
        <Link to="/home">Home</Link>
        {user.token && <Link to="/todos">Todos</Link>}
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
        {user.token && <Link to="/todos/add">Add Task</Link>}

        {/* <Link to="/todos/delete/12345">Delete Task</Link>
            <Link to="/todos/edit/12345">Edit Task</Link> */}
    </div>
);
}

export default Menu;
