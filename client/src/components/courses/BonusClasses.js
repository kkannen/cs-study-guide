import React, { Component } from 'react';
import BonusLesson from "../BonusLesson";
import PropTypes from "prop-types";

class BonusClasses extends Component {

  state = {
    classes: []
  }

  componentDidMount = () => {
    this.props.loadAddedClasses();
  }

  renderLessons = () => {
    return this.props.addedClassesList.map((lesson, index) => {
      return (
        <BonusLesson
          key={index} 
          lesson={lesson}
          lessonNumber={index + 1}
        />        
      )
    })
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Just a few more things....</h1>
        <p>Below is a list of a few extra resources, I thought might be good suppliments to your CS journey.</p>        
        {this.renderLessons()}
      </div>
    );
  }
}

BonusClasses.propTypes = {
  loadAddedClasses: PropTypes.func,
  addedClassesList: PropTypes.array
};

export default BonusClasses;