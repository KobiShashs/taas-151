import moment from "moment";
import { TaskModel } from "../../../Models/Task";
import "./TodoItem.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface TodoItemProps {
    task: TaskModel;
}
function TodoItem(props: TodoItemProps): JSX.Element {

    const navigate = useNavigate();

    const deleteItem = (id: number) => {
        navigate('/todos/delete/' + id);
    }

    const editItem = (id: number) => {
        navigate('/todos/edit/' + id);
    }
    return (
        <div className="TodoItem card">
            <h3>{props.task.title} </h3>
            {/* <span>#{props.task.id}</span> */}
            <hr />
            <span className="desc">{props.task.description}</span>
            <span className="group">{props.task.group}</span>
            <span>{moment(props.task.when).format("DD/MM/YY")}</span>
            {/* <span>{moment(props.task.when).format("HH:mm:ss")}</span> */}
            <div className="row">
                <button onClick={() => deleteItem(props.task.id)}><FaTrash /></button>
                <button onClick={() => editItem(props.task.id)}><FaEdit /></button>
            </div>
        </div>
    );
}

export default TodoItem;
