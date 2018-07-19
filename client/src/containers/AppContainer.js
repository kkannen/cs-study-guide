import {connect} from "react-redux";
import App from "../App";


const mapStateToProps = (state) => {
    return {
        sidebarIsOut: state.sidebarIsOut,
        userProgress: state.userProgress,
        sicpProgress: state.sicpProgress
    }
}

export default connect(mapStateToProps)(App);