import {connect} from "react-redux";
import AdminAddClass from "../components/AdminAddClass";
import {adminAddClass} from "../actions";

const mapDispatchToProps = (dispatch) => ({
    adminAddClass: (addedClass) => dispatch(adminAddClass(addedClass))
})

export default connect(null, mapDispatchToProps)(AdminAddClass)