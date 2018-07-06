import {connect} from "react-redux";
import Landing from "../components/Landing";

const mapStateToProps = (state) => {
    return {
        listOfModules: state.listOfModules
    }
}

export default connect(mapStateToProps)(Landing);