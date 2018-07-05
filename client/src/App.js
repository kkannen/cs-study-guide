import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Sidebar from './containers/SidebarContainer';
import SICP from './containers/SICPContainer';
import Landing from './components/Landing';
import AlgorithmsDataStructures from "./components/courses/AlgorithmsDataStructures"
import ComputerArchitecture from "./components/courses/ComputerArchitecture"
import ComputerNetworking from "./components/courses/ComputerNetworking"
import Databases from "./components/courses/Databases"
import DistributedSystems from "./components/courses/DistributedSystems"
import LanguagesAndCompilers from "./components/courses/LanguagesAndCompilers"
import MathForCS from "./components/courses/MathForCS"


class App extends Component {
     
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
            <div className="courseMaterial">
              <Switch>
                <Route path="/sicp" component={SICP}/>
                <Route path="/algorithms-and-data-structures" component={AlgorithmsDataStructures}/>
                <Route path="/computer-architecture" component={ComputerArchitecture}/>
                <Route path="/computer-networking" component={ComputerNetworking}/>
                <Route path="/databases" component={Databases}/>
                <Route path="/distributed-systems" component={DistributedSystems}/>
                <Route path="/languages-and-compilers" component={LanguagesAndCompilers}/>
                <Route path="/math-for-cs" component={MathForCS}/>
                <Route path="/" component={Landing}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
