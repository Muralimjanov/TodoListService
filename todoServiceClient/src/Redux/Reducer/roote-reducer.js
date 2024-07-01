import { combineReducers } from "redux";
import { AuthReducer } from "./auth-reducer";
import { todoReducer } from "./todo-reducer";

export const rootReducer = combineReducers({
    AuthReducer,
    todoReducer
})