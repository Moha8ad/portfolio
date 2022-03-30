import TimedActionTypes from './timed.types';

const INITIAL_STATE = {
    timedDB: [{title: "one"}, {title: "two"}],
}

const timedReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case TimedActionTypes.ADD_TIMED_LIST:
            return {
                ...state,
                timedDB: [...state.timedDB, action.payload]
            }
        default:
            return state
    }
}

export default timedReducer;