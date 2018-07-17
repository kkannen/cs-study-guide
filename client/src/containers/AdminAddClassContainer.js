import {connect} from "react-redux";
import AdminAddClass from "../components/AdminAddClass";
import {adminAddClass} from "../actions";

const mapStateToProps = (state) => ({addedClassesList: state.addedClassesList})


const mapDispatchToProps = (dispatch) => ({
    adminAddClass: (addedClass) => dispatch(adminAddClass(addedClass))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddClass)