import TimedActionTypes from "./timed.types"

export const addTimedList = timedList => ({
    type: TimedActionTypes.ADD_TIMED_LIST,
    payload: timedList
});