import axios from "axios";
import "./TotalTodos.css";
import webApi from "../../../Services/WebApi";
import { useEffect, useState } from "react";
import notify from "../../../Services/NotificationService";
import store from "../../../Redux/Store";



function TotalTodos(): JSX.Element {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        webApi.countTasks().then(res => setTotal(res.data));
        // .catch (err=> notify.error(err));



        return store.subscribe(() => {
            setTotal(store.getState().tasksReducer.tasks.length); // Will let us notify
        });
    },
    []);


    return (
        <div className="TotalTodos">
            {total && <p> Total : {total} </p>}
        </div>
    );
}

export default TotalTodos;
