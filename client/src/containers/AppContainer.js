import {connect} from "react-redux";
import App from "../App";


const mapStateToProps = (state) => {
    return {
        sidebarIsOut: state.sidebarIsOut,
    }
}

export default connect(mapStateToProps)(App);