export function toggleSidebarIsOut(bool) {
    return {
        type: "TOGGLE_SIDEBAR_IS_OUT",
        value: bool
    }
}

// export function updateSicpProgress(newKey, bool) {
//     return function(dispatch) {
//         dispatch({
//             type: "UPDATE_SICP_PROGRESS",
//         });
//         const updatedValue = {[newKey]: bool}
//         Object.assign()
//     }
// }

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

// export function addProgress() {
//     return {
//         type: "ADD_PROGRESS",
//     }
// }

// export function subtractProgress() {
//     return {
//         type: "SUBTRACT_PROGRESS"
//     }
// }

export function adminAddClass(addedClass) {
    return function(dispatch) {
        fetch("/addedClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedClass)
        }).then(() => dispatch(loadAddedClasses()));
    }
}

export function loadAddedClasses() {
    return function(dispatch) {
        dispatch({
            type: "LOAD_ADDED_CLASSES"
        });
        fetch("/addedClasses").then((response) => {
            return response.json();
        }).then((addedclasses) => {
            dispatch(AddedClassesLoaded(addedclasses));
        });
    };
};

export function AddedClassesLoaded(addedclasses) {
    return {
        type: "ADDED_CLASSES_LOADED",
        value: addedclasses
    }
}