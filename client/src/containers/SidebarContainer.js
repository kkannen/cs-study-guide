import {connect} from "react-redux";
import Sidebar from "../components/Sidebar";

const mapStateToProps = (state) => {return {listOfModules: state.listOfModules}}

export default connect(mapStateToProps)(Sidebar);