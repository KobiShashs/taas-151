import { Credentials, User } from './../Models/Auth';
import axios, { AxiosResponse } from 'axios';
import { TaskModel, TaskPayloadModel } from './../Models/Task';
import global from './ConstantService';
import store from '../Redux/Store';
class WebApi {

    private taskApi = global.urls.tasks;
    private userApi = global.urls.users;
    private authApi = global.urls.auth;

    public register(credentials: Credentials): Promise<AxiosResponse<any>> {
        return axios.post<any>(this.authApi + "/" + "register", credentials);
    }

    public login(credentials: Credentials): Promise<AxiosResponse<User>> {
        return axios.post<User>(this.authApi + "/" + "login", credentials);
    }

    public getAllTasks(): Promise<AxiosResponse<TaskModel[]>> {
        const token = store.getState().userReducer.user.token;
        const headers = {"authorization": token}
        return axios.get<TaskModel[]>(this.userApi, { headers });
    }

    public getSingletTaskById(id: number): Promise<AxiosResponse<TaskModel>> {
        return axios.get<TaskModel>(this.taskApi + "/" + id);
    }

    public deleteTask(id: number): Promise<AxiosResponse<any>> {
        return axios.delete<any>(this.taskApi + "/" + id);
    }

    public addTask(task: TaskPayloadModel): Promise<AxiosResponse<TaskModel>> {
        return axios.post<TaskModel>(this.taskApi, task);
    }

    public editTask(id: number, task: TaskPayloadModel): Promise<AxiosResponse<TaskModel>> {
        return axios.put<TaskModel>(this.taskApi + "/" + id, task)
    }

    public countTasks(): Promise<AxiosResponse<number>> {
        const token = store.getState().userReducer.user.token;
        const headers = {"authorization": token}
        return axios.get<number>(this.userApi + "/" + "count",{headers});
    }

}

const webApi = new WebApi();
export default webApi;