import React, { Component } from 'react';
import './App.css';
import SICP from './containers/SICPContainer';
import Sidebar from './components/Sidebar';

class App extends Component {

  state={
    sidebarOut: false
  }

  lessonWidth = () => this.state.sidebarOut ? <SICP style={{width: "80%"}}/> : <SICP style={{width: "95%"}}/>
     
  render() {

    return (
      <div className="App">
        <Sidebar />
        <SICP sidebarOut={this.state.sidebarOut}/>
      </div>
    );
  }
}

export default App;
