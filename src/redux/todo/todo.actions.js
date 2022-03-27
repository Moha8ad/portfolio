import ToDoActionTypes from "./todo.types"

export const setToDoList = toDoList => ({
    type: ToDoActionTypes.SET_TO_DO_LIST,
    payload: toDoList
});