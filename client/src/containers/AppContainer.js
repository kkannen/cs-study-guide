import {connect} from "react-redux";
import App from "../App";
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

export default connect(mapStateToProps, mapDispatchToProps)(App);