import {connect} from "react-redux";
import Sidebar from "../components/Sidebar";
import {toggleSidebarIsOut} from "../actions";

const mapStateToProps = (state) => {
    return {
        listOfModules: state.listOfModules,
        sidebarIsOut: state.sidebarIsOut
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOpenSidebar: () => dispatch(toggleSidebarIsOut(true)),
        handleCloseSidebar: () => dispatch(toggleSidebarIsOut(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);