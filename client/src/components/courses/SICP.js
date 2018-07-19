import React, { Component } from 'react';
import Lesson from "../../components/Lesson";
import LinearProgress from '@material-ui/core/LinearProgress';


class SICP extends Component {
    state ={
        lessons: this.props.currentUser.sicpProgress
    }

    getUserInfo = () => {
        fetch(`/users/${this.props.currentUser._id}`).then((response) => {
        response.json().then((user) => {
          this.setState({lessons: user.sicpProgress})
        });
      });
      }
    
    componentDidMount = () => {
        this.props.loadSICPLessons()
        this.getUserInfo()
    }

    handleCheckUncheck = (key) => {
        if(this.state.lessons)
{        if (this.state.lessons[`lesson${key}`]) {
            const completedClass = {[`lesson${key}`]: false}
            this.setState({addedClass: Object.assign(this.state.lessons, completedClass)})
            fetch(`/users/${this.props.currentUser._id}`, {
                method: "PUT",
                body: JSON.stringify(this.state.lessons),
                headers: {"Content-Type": "application/json"}
            })
        } else {
            const completedClass = {[`lesson${key}`]: true}
            this.setState({addedClass: Object.assign(this.state.lessons, completedClass)})
            fetch(`/users/${this.props.currentUser._id}`, {
                method: "PUT",
                body: JSON.stringify(this.state.lessons),
                headers: {"Content-Type": "application/json"}
            })
        }}
    }

    renderLessons = () => {
            return this.props.sicpLessons.map((lesson, index) => 
            <div key={index}>
                <Lesson 
                check={(key)=>this.handleCheckUncheck(key)}
                lesson={lesson}
                progress={this.state.lessons}
                completed={this.state.lessons[`lesson${lesson.lessonNumber}`]}
                />
            </div>)
        }

    calculateProgress = () => {
        return (((Object.values(this.state.lessons).filter(lesson => lesson).length)/38)*100)
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
            <LinearProgress color="secondary" style={{height: 15}} variant="determinate" value={this.calculateProgress()} />
            {this.renderLessons()}
        </div>
        );
    }
}

export default SICP;