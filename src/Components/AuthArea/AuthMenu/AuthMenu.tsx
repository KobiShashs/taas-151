import { Link } from "react-router-dom";
import "./AuthMenu.css";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";

function AuthMenu(): JSX.Element {
    const token = "";
    const email = "";
    return (
        <div className="AuthMenu row">
            {(token) ?
                <>Hello {email}  <CustomLink to="logout">Logout</CustomLink></> :
                <>Hello guest  <CustomLink to="register">Register </CustomLink>  <CustomLink to="login">Login </CustomLink></>}
        </div>
    );
}

export default AuthMenu;
