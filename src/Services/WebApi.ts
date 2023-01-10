import { Credentials, User } from './../Models/Auth';
import axios, { AxiosResponse } from 'axios';
import { TaskModel, TaskPayloadModel } from './../Models/Task';
import global from './ConstantService';
import store from '../Redux/Store';
import tokenAxios from './AxiosToken';
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
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token }
        // return axios.get<TaskModel[]>(this.userApi, { headers });
        return tokenAxios.get<TaskModel[]>(this.userApi);
    }

    public getSingleTaskById(id: number): Promise<AxiosResponse<TaskModel>> {
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token };
        // return axios.get<TaskModel>(this.userApi + "/" + id, { headers });
        return tokenAxios.get<TaskModel>(this.userApi + "/" + id);
    }

    public deleteTask(id: number): Promise<AxiosResponse<any>> {
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token }
        // return axios.delete<any>(this.userApi + "/" + id, { headers });
        return tokenAxios.delete<any>(this.userApi + "/" + id);
    }

    public addTask(task: TaskPayloadModel): Promise<AxiosResponse<TaskModel>> {
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token };
        // return axios.post<TaskModel>(this.userApi, task, { headers });
        return tokenAxios.post<TaskModel>(this.userApi, task);
    }

    public editTask(id: number, task: TaskPayloadModel): Promise<AxiosResponse<TaskModel>> {
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token };
        // return axios.put<TaskModel>(this.userApi + "/" + id, task, { headers });
        return tokenAxios.put<TaskModel>(this.userApi + "/" + id, task);
    }

    public countTasks(): Promise<AxiosResponse<number>> {
        // const token = store.getState().userReducer.user.token;
        // const headers = { "authorization": token }
        // return axios.get<number>(this.userApi + "/" + "count", { headers });
        return tokenAxios.get<number>(this.userApi + "/" + "count");
    }

}

const webApi = new WebApi();
export default webApi;