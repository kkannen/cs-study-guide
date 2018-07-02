import {connect} from "react-redux";
import App from "../App";
import {loadSICPLessons} from "../actions";

const mapStateToProps = (state) => {
    return {
        sicpLessons: state.sicpLessons
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