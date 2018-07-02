import {combineReducers} from "redux";

const sicpLessonsList = (state = [], action) => {
    if(action.type === "SICP_LESSONS_LOADED") {
        return action.value;
    } return state
};

const rootReducer = combineReducers({
    sicpLessonsList
});

export default rootReducer;