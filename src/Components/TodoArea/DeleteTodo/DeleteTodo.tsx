import { useNavigate, useParams } from "react-router-dom";
import "./DeleteTodo.css";
import notify from "../../../Services/NotificationService";
import webApi from "../../../Services/WebApi";
import store from "../../../Redux/Store";
import { deletedTaskAction } from "../../../Redux/TasksAppState";

function DeleteTodo(): JSX.Element {
    const params = useParams();
    // const id = 12345;
    const id = +(params.id || 0);
    const navigate = useNavigate();

    const cancel = () => {
        navigate("/todos");
    }

    const yes = async () => {
        await webApi.deleteTask(id)
            .then(res => {
                notify.success('Woho deleted successfully');
                store.dispatch(deletedTaskAction(id));
                navigate("/todos");
            })
            .catch(err => {
                notify.error(err);
            });
    }
    return (
        <div className="DeleteTodo col">
            <h3>Attention</h3>
            <div className="wrapper col">
                <div className="row">
                    <p>Are you sure you want to delete task #{id} ?</p>
                </div>
                <div className="row gap">
                    <button className="cancel" onClick={cancel}>Cancel</button>
                    <button className="yes" onClick={yes}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteTodo;
