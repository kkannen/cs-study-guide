import React, { Component } from 'react';
import Lesson from "../../containers/LessonContainer"

class BonusClasses extends Component {
  componentDidMount = () => {
    this.props.loadAddedClasses();
  }

  renderLessons = () => {
    return this.props.addedClassesList.map((lesson, index) => {
      return (
        <div key={index}>
          <Lesson lesson={lesson}/>
        </div>
        
      )
    })
  }

  render() {
    console.log(this.props.addedClassesList)
    return (
      <div className="BonusClasses">
        <h1>WOW NEW CLASSES THAT TOTALLY HAVE A POINT</h1>
        {
          this.props.addedClassesList.map((added, key) => {
            return (
              <div>
                {this.renderLessons()}
              </div>
              
            )
          })
        }
        
      </div>
    );
  }
}

export default BonusClasses;