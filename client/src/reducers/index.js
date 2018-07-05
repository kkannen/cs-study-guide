import {combineReducers} from "redux";

const listOfModules = (state = [], action) => {
    return state;
};

const sicpLessonsList = (state = [], action) => {
    if(action.type === "SICP_LESSONS_LOADED") {
        return action.value;
    } return state
};

const sicpProgress = (state = 0, action) => {
    if(action.type === "ADD_PROGRESS") {
        return state + (100/38);
    } else if (action.type === "SUBTRACT_PROGRESS") {
        return state - (100/38);
    } else {
        return state;
    }
}



const rootReducer = combineReducers({
    listOfModules, sicpLessonsList, sicpProgress
});

export default rootReducer;