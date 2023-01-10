import "./AddTodo.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaskModel, TaskPayloadModel } from "../../../Models/Task";
import axios from "axios";
import global from "../../../Services/ConstantService";
import { useNavigate } from "react-router-dom";
import notify from "../../../Services/NotificationService";
import webApi from "../../../Services/WebApi";
import store from "../../../Redux/Store";
import { addedTaskAction } from "../../../Redux/TasksAppState";
import { useEffect } from "react";
function AddTodo(): JSX.Element {

    const navigate = useNavigate();
    useEffect(() => {
        const token = store.getState().userReducer.user.token;
        console.log(token);
        if (!token) {
            navigate("/login");

        }
    }, []);



    const schema = yup.object().shape({
        title:
            yup.string()
                .required("title is required"),
        description:
            yup.string().required("description is missing"),
        group:
            yup.string()
                .required("group is required"),
        when:
            yup.date()
                .min(new Date(), 'there is not option for previous time')
                .default(new Date())
                .typeError("You must specify a date")
                .required("Date is required")
                .nullable().default(() => new Date()),
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<TaskPayloadModel>({ mode: "all", resolver: yupResolver(schema) });


    const postTask = async (task: TaskPayloadModel) => {
        await webApi.addTask(task)
            .then(res => {
                notify.success('Woho task added successfully');
                store.dispatch(addedTaskAction(res.data));
                navigate('/todos');
            })
            .catch(err => {
                notify.error(err);
            })
        console.log(task);
    }
    return (
        <div className="AddTodo">
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit(postTask)}>

                {(errors.title) ? <span>{errors.title?.message}</span> : <label htmlFor="title">Title</label>}
                <input {...register("title")} id="title" name="title" type="text" placeholder="Title..." />
                {(errors.description) ? <span>{errors.description?.message}</span> : <label htmlFor="description">Description</label>}
                <input {...register("description")} id="description" name="description" type="text" placeholder="Description..." />
                {(errors.group) ? <span>{errors.group?.message}</span> : <label htmlFor="group">Group</label>}
                <input {...register("group")} id="group" name="group" type="text" placeholder="Group..." />
                {(errors.when) ? <span>{errors.when?.message}</span> : <label htmlFor="when">When</label>}
                <input {...register("when")} id="when" name="when" type="datetime-local" placeholder="When..." />
                <button disabled={!isValid}>Add Task</button>


            </form>
        </div>
    );
}

export default AddTodo;
