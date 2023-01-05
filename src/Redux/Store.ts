import { combineReducers,createStore } from "redux";
import { tasksReducer } from "./TasksAppState";



//Multiple catsReducer
const reducers = combineReducers({tasksReducer: tasksReducer});
const store = createStore(reducers);


export default store;