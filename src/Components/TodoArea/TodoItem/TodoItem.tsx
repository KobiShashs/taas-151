import moment from "moment";
import { TaskModel } from "../../../Models/Task";
import "./TodoItem.css";

interface TodoItemProps {
    task: TaskModel;
}
function TodoItem(props: TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem card">
            <h3>{props.task.title} </h3>
            {/* <span>#{props.task.id}</span> */}
            <hr />
            <span className="desc">{props.task.description}</span>
            <span className="group">{props.task.group}</span>
            <span>{moment(props.task.when).format("DD/MM/YY")}</span>
            {/* <span>{moment(props.task.when).format("HH:mm:ss")}</span> */}
        </div>
    );
}

export default TodoItem;
