import React, { Component } from 'react';
import Lesson from "../../containers/LessonContainer";
import LinearProgress from '@material-ui/core/LinearProgress';


class SICP extends Component {

    componentDidMount = () => {
        this.props.loadSICPLessons()
      }

    renderLessons = () => {
        return this.props.sicpLessons.map((lesson, index) => <div key={index}><Lesson lesson={lesson}/></div>)
    }

    render() {
        return (
        <div className="SICP">
            <h1>Structure and Interpretation of Computer Programs</h1>
            <p>Textbook: Structure and Interpretation of Computer Programs 2nd Edition by Gerald Jay Sussman and Hal Abelson</p>
            <p>Video Lecture: UC Berkely's CS61a, Spring 2018</p>

            <p>Useful tools for this class:</p>
            <ul>
                <li>Code editor: <a href="https://code.visualstudio.com/download" style={{color:"deepskyblue"}}>VSCode</a></li>
                <li>Terminal for Windows: <a href="https://git-scm.com/download/win" style={{color:"deepskyblue"}}>Git for Windows</a></li>
                <li>Terminal for Mac: <a href="https://www.iterm2.com/" style={{color:"deepskyblue"}}>iterm2</a></li>
                <li>Python: <a href="https://code.visualstudio.com/download" style={{color:"deepskyblue"}}>VSCode</a></li>
            </ul>
            <LinearProgress color="secondary" style={{height: 20}} variant="determinate" value={this.props.progress}/>
            {this.renderLessons()}
        </div>
        );
    }
}

export default SICP;