import {connect} from "react-redux";
import BonusClasses from "../components/courses/BonusClasses";
import {loadAddedClasses} from "../actions";

const mapStateToProps = (state) => {
    return {
        addedClassesList: state.addedClassesList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadAddedClasses() {
            dispatch(loadAddedClasses());
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(BonusClasses);