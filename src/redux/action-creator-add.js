import { ADD }  from './action-type-add'

export const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};