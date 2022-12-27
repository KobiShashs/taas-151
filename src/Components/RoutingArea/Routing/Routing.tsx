import { Route, Routes } from "react-router";
import "./Routing.css";
import App from "../../../App";
import Home from "../../PagesAread/Home/Home";
import About from "../../PagesAread/About/About";
import Donate from "../../PagesAread/Donate/Donate";
import Page404 from "../../PagesAread/Page404/Page404";
import TodoList from "../../TodoArea/TodoList/TodoList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
