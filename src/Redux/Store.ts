import { combineReducers,createStore } from "redux";
import { tasksReducer } from "./TasksAppState";
import { userReducer } from "./UserAppState";



//Multiple catsReducer
const reducers = combineReducers({tasksReducer: tasksReducer,userReducer:userReducer});
const store = createStore(reducers);


export default store;