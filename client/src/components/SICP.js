import React, { Component } from 'react';
import Lesson from './Lesson';

class SICP extends Component {

    componentDidMount = () => {
        this.props.loadSICPLessons()
        console.log("did mount", this.props.sicpLessons.length)
      }

    renderLessons = () => {
        return this.props.sicpLessons.map((lesson, index)=>
        <div key={index}>
            <Lesson 
            lesson={lesson} 
            subtractProgress={this.subtractProgress} 
            addProgress={this.addProgress}/>
        </div>)
      }

    render() {
        console.log( "render", this.props.sicpLessons.length)
        return (
        <div className="SICP">
            {this.renderLessons()}
        </div>
        );
    }
}

export default SICP;