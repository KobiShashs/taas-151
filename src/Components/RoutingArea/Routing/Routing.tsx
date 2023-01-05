import { Route, Routes } from "react-router";
import "./Routing.css";
import App from "../../../App";
import Home from "../../PagesAread/Home/Home";
import About from "../../PagesAread/About/About";
import Donate from "../../PagesAread/Donate/Donate";
import Page404 from "../../PagesAread/Page404/Page404";
import TodoList from "../../TodoArea/TodoList/TodoList";
import AddTodo from "../../TodoArea/AddTodo/AddTodo";
import DeleteTodo from "../../TodoArea/DeleteTodo/DeleteTodo";
import EditTodo from "../../TodoArea/EditTodo/EditTodo";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/todos/add" element={<AddTodo />} />
                <Route path="/todos/delete/:id/" element={<DeleteTodo />} />
                <Route path="/todos/edit/:id" element={<EditTodo />} />
                <Route path="/donate" element={<Donate bank={12} branch={789} account={123456} owner={"TaaS Technology LTD"} />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
