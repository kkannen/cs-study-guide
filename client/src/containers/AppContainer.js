import {connect} from "react-redux";
import App from "../App";
import {loadUserProgress} from "../actions";


const mapStateToProps = (state) => {
    return {
        sidebarIsOut: state.sidebarIsOut,
        userProgress: state.userProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserProgress(id) {
            dispatch(loadUserProgress(id))
        }
    }
}

export default connect(mapStateToProps)(App);