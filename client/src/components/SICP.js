import React, { Component } from 'react';
import Lesson from './Lesson';

class SICP extends Component {

    componentDidMount = () => {
        this.props.loadSICPLessons()
        console.log("did mount", this.props.sicpLessons.length)
      }

    moduleWidth = () => {
        if(this.props.sidebarOut) {
            return {width:"80%", marginLeft:"20%"}
        } return {width:"95%", marginLeft:"5%"}
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
        <div className="SICP" style={this.moduleWidth()}>
            {this.renderLessons()}
        </div>
        );
    }
}

export default SICP;