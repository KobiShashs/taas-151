import { TaskModel } from './../Models/Task';
export class TasksAppState {
    // Step 1 - create the app state object
    public tasks: TaskModel[] = [];
}

// Step 2 - define all required actions
export enum ActionType {
    GOT_ALL_TASKS = "GOT_ALL_TASKS",
    GOT_SINGLE_TASK = "GOT_SINGLE_TASK",
    ADDED_TASK = "ADDED_TASK",
    UPDATED_TASK = "UPDATED_TASK",
    DELETED_TASK = "DELETED_TASK"
}

// Step 3 - define what is action in terms of data
export interface TaskAction {
    type: ActionType;
    payload: any;
}

// Step 4 - creator functions - gets payload regarding the action
export function gotAllTasksAction(tasks: TaskModel[]): TaskAction {
    return { type: ActionType.GOT_ALL_TASKS, payload: tasks };
}

export function gotSingleTaskAction(task: TaskModel): TaskAction {
    return { type: ActionType.GOT_SINGLE_TASK, payload: task };
}

export function addedTaskAction(task: TaskModel): TaskAction {
    return { type: ActionType.ADDED_TASK, payload: task };
}

export function updatedTaskACtion(task: TaskModel): TaskAction {
    return { type: ActionType.UPDATED_TASK, payload: task };
}

export function deletedTaskAction(id: number): TaskAction {
    return { type: ActionType.DELETED_TASK, payload: id }
}


// Step 5 - Reducer function perform the required action
export function tasksReducer(currentState: TasksAppState = new TasksAppState(),action:TaskAction): TasksAppState{


    const newState = {...currentState} //Spread Operator // Copy
    switch(action.type){
        case ActionType.GOT_ALL_TASKS: {
            newState.tasks = action.payload;
            break;
        }
        case ActionType.ADDED_TASK:{
            newState.tasks.push(action.payload);
            break;
        }
        case ActionType.UPDATED_TASK: {
            console.log(newState.tasks);
            const idx = newState.tasks.findIndex(task => task.id === action.payload.id);
            newState.tasks[idx] = action.payload;
            console.log(newState.tasks);
            break;
        }

        case ActionType.DELETED_TASK: {
           newState.tasks = newState.tasks.filter(task => task.id !== action.payload);
        }


    }
    return newState;

}