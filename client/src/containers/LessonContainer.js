import {connect} from "react-redux";
import Lesson from "../components/Lesson"
import {addProgress, subtractProgress} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        increase: function(){
            let action = addProgress();
            dispatch(action);
        },
        decrease: function(){
            let action = subtractProgress();
            dispatch(action);
        }
        }
    };


export default connect(null, mapDispatchToProps)(Lesson);