import ToDoActionTypes from './todo.types';

const INITIAL_STATE = {
    toDoListDB: [],
}

const todoReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case ToDoActionTypes.SET_TO_DO_LIST:
            return {
                ...state,
                toDoListDB: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;