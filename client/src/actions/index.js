export function toggleSidebarIsOut(bool) {
    return {
        type: "TOGGLE_SIDEBAR_IS_OUT",
        value: bool
    }
}

export function loadSICPLessons() {
    return function(dispatch) {
        dispatch({
            type: "LOAD_SICP_LESSONS"
        });
        fetch("/sicplessons").then((response) => {
            return response.json();
        }).then((sicplessons) => {
            dispatch(SICPLessonsLoaded(sicplessons));
        });
    };
};

export function SICPLessonsLoaded(sicplessons) {
    return {
        type: "SICP_LESSONS_LOADED",
        value: sicplessons
    }
}

export function addProgress() {
    return {
        type: "ADD_PROGRESS",
    }
}

export function subtractProgress() {
    return {
        type: "SUBTRACT_PROGRESS"
    }
}