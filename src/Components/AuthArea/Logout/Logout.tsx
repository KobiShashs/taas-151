import { useEffect } from "react";
import "./Logout.css";
import store from "../../../Redux/Store";
import { loggedOut } from "../../../Redux/UserAppState";
import { useNavigate } from "react-router-dom";
import { removeTasks } from "../../../Redux/TasksAppState";

function Logout(): JSX.Element {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('Im here');
        store.dispatch(loggedOut());
        store.dispatch(removeTasks());
        navigate('/login');
    }, []);
    return (
        <></>
    );
}

export default Logout;
