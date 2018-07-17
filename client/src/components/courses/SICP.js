import React, { Component } from 'react';
import Lesson from "../../containers/LessonContainer";
import LinearProgress from '@material-ui/core/LinearProgress';


class SICP extends Component {

    componentDidMount = () => {
        
        this.props.loadSICPLessons()
        console.log("sicp did mount");
        this.props.loadUserProgress("5b4c0d68ed799c1efba2a786")
        
      }

    renderLessons = () => {
        return this.props.sicpLessons.map((lesson, index) => 
        <div key={index}>
            <Lesson 
            lesson={lesson} 
            completed={this.props.userProgress["sicpProgress"][`lesson${lesson.lessonNumber}`]}/>
        </div>)
    }

    numberOfCompletedLessons = () => {
        const lessonKeys = Object.keys(this.props.userProgress["sicpProgress"])
        console.log(lessonKeys.filter((lesson, index) => {
            return this.props.userProgress["sicpProgress"][lesson]
        }))
    }

    render = () => {
        
        
        return (
        <div className="SICP">
        
            <h1 style={{fontSize: 40}}>Structure and Interpretation of Computer Programs</h1>
            <p>Textbook: Structure and Interpretation of Computer Programs 2nd Edition by Gerald Jay Sussman and Hal Abelson</p>
            <p>Video Lecture: UC Berkely's CS61a, Spring 2018</p>

            <strong style={{fontSize:"1.2em"}}>Useful tools for this class:</strong>
            <hr style={{width: "30%", margin: "10px 35%", borderColor: "#ff0077"}}/>
            
            
                <p style={{marginBottom:0, marginTop:5}}>Code editor: <a href="https://code.visualstudio.com/download" target="blank" style={{color:"#ff0077"}}>VSCode</a></p>
                <p style={{marginBottom:0, marginTop:5}}>Terminal for Windows: <a href="https://git-scm.com/download/win" target="blank" style={{color:"#ff0077"}}>Git for Windows</a></p>
                <p style={{marginBottom:0, marginTop:5}}>Terminal for Mac: <a href="https://www.iterm2.com/" target="blank" style={{color:"#ff0077"}}>iterm2</a></p>
                <p style={{marginBottom:30, marginTop:5}}>Python: <a href="https://code.visualstudio.com/download" target="blank" style={{color:"#ff0077"}}>VSCode</a></p>
            
            <strong>Progress: </strong>
            <LinearProgress color="secondary" style={{height: 15}} variant="determinate" value={this.props.progress}/>
            {this.renderLessons()}
            {this.numberOfCompletedLessons()}
        </div>
        );
    }
}

export default SICP;