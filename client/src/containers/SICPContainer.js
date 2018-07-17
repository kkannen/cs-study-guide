import {connect} from "react-redux";
import SICP from "../components/courses/SICP";
import {loadSICPLessons, loadUserProgress} from "../actions";

const mapStateToProps = (state) => {
    return {
        sicpLessons: state.sicpLessonsList,
        progress: state.sicpProgress,
        userProgress: state.userProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadSICPLessons() {
            dispatch(loadSICPLessons());
        },
        loadUserProgress(id) {
            dispatch(loadUserProgress(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SICP);