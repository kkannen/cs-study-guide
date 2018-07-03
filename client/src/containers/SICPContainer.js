import {connect} from "react-redux";
import SICP from "../components/SICP";
import {loadSICPLessons} from "../actions";

const mapStateToProps = (state) => {
    return {
        sicpLessons: state.sicpLessonsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadSICPLessons() {
            dispatch(loadSICPLessons());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SICP);