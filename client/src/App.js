import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.loadSICPLessons()
  }

  render() {
    console.log(this.props.sicpLessonsList)
    return (
      <div className="App">
        this will be an app soon
      </div>
    );
  }
}

export default App;
