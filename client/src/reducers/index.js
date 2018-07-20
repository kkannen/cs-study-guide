import {combineReducers} from "redux";

const sidebarIsOut = (state = false, action) => {
    if(action.type === "TOGGLE_SIDEBAR_IS_OUT") {
        return action.value
    } return state
}

const listOfModules = (state = [], action) => {
    return state;
};

const addedClassesList = (state=[], action) => {
    if(action.type === "ADDED_CLASSES_LOADED") {
        return action.value;
    } return state;
}

const sicpLessonsList = (state = [], action) => {
    if(action.type === "SICP_LESSONS_LOADED") {
        return action.value;
    } return state
};

const rootReducer = combineReducers({
    listOfModules, 
    sicpLessonsList, 
    sidebarIsOut, 
    addedClassesList,
});

export default rootReducer;