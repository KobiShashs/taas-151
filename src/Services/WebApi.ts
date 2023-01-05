import axios, { AxiosResponse } from 'axios';
import { TaskModel, TaskPayloadModel } from './../Models/Task';
import global from './ConstantService';
class WebApi {

    private baseUrl = global.urls.tasks;

    public getAllTasks(): Promise<AxiosResponse<TaskModel[]>> {
        return axios.get<TaskModel[]>(this.baseUrl);
    }

    public getSingletTaskById(id: number) : Promise<AxiosResponse<TaskModel>> {
        return axios.get<TaskModel>(this.baseUrl + "/" + id);
    }

    public deleteTask(id: number) :Promise<AxiosResponse<any>> {
        return axios.delete<any>(this.baseUrl + "/" + id);
    }

    public addTask(task: TaskPayloadModel) :Promise<AxiosResponse<TaskModel>>  {
        return axios.post<TaskModel>(this.baseUrl, task);
    }

    public editTask(id: number, task: TaskPayloadModel):Promise<AxiosResponse<TaskModel>>  {
        return axios.put<TaskModel>(this.baseUrl + "/" + id, task)
    }

    public countTasks(): Promise<AxiosResponse<number>>{
        return axios.get<number>(this.baseUrl + "/" + "count");
    }

}

const webApi = new WebApi();
export default webApi;