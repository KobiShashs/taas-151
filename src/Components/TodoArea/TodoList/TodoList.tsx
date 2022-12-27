import { useEffect, useState } from "react";
import "./TodoList.css";
import axios from "axios";
import { TaskModel } from "../../../Models/Task";
import notify from "../../../Services/NotificationService";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import global from "../../../Services/ConstantService";


function TodoList(): JSX.Element {

    // const url = "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks";
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    useEffect(() => {
        axios.get<TaskModel[]>(global.urls.tasks)
            .then(res => {
                console.log(res.data);
                setTasks(res.data);
                notify.success('Woho I got my element from server side!!!')
            })
            .catch(err => notify.error('Opps I did it again'));
    }, []);

    return (
        <div className="TodoList">

            <h1>Todo list</h1>

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
