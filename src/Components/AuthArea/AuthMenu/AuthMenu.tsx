import { Link } from "react-router-dom";
import "./AuthMenu.css";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import { useEffect, useState } from "react";
import { User } from "../../../Models/Auth";
import store from "../../../Redux/Store";

function AuthMenu(): JSX.Element {
    const [user, setUser] = useState<User>(store.getState().userReducer.user);

    useEffect(() => {
        return store.subscribe(() => setUser(store.getState().userReducer.user));
    }, []);
    return (
        <div className="AuthMenu row">
            {(user?.token) ?
                <>Connected as {user.email}&nbsp;<CustomLink to="logout">Logout</CustomLink></> :
                <>Hello guest &nbsp;<CustomLink to="register">Register </CustomLink>&nbsp;<CustomLink to="login">Login </CustomLink></>}
        </div>
    );
}

export default AuthMenu;
