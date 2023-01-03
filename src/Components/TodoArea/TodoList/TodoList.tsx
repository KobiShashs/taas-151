import { useEffect, useState } from "react";
import "./TodoList.css";
import { TaskModel } from "../../../Models/Task";
import notify from "../../../Services/NotificationService";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import webApi from "../../../Services/WebApi";
import { useNavigate } from "react-router-dom";


function TodoList(): JSX.Element {

    const navigate = useNavigate();
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    useEffect(() => {
        // axios.get<TaskModel[]>(global.urls.tasks)
        webApi.getAllTasks()
            .then(res => {
                console.log(res.data);
                setTasks(res.data);
                notify.success('Woho I got my element from server side!!!')
            })
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="TodoList col">

            <h1>Todo list</h1>
            <button className="addButton" onClick={() => navigate("add")}>Add new Task</button>

            {
                tasks?.length > 0
                    ? <>{tasks.map((t, idx) => <TodoItem key={"t" + idx} task={t} />)}</>
                    : <EmptyView msg="No Tasks 4u" />
            }


            {/* {
                tasks.length > 0
                    ? <>{tasks.map((task, idx) => <p key={"t" + idx}>{task.id},{task.title},{task.description}</p>)}</>
                    : <EmptyView msg="No Tasks for you!" />
            } */}
        </div>
    );
}

export default TodoList;
