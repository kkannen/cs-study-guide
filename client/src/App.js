import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Sidebar from './containers/SidebarContainer';
import SICP from './containers/SICPContainer';
import Landing from './containers/LandingContainer';
import AlgorithmsDataStructures from "./components/courses/AlgorithmsDataStructures"
import ComputerArchitecture from "./components/courses/ComputerArchitecture"
import ComputerNetworking from "./components/courses/ComputerNetworking"
import Databases from "./components/courses/Databases"
import DistributedSystems from "./components/courses/DistributedSystems"
import LanguagesAndCompilers from "./components/courses/LanguagesAndCompilers"
import MathForCS from "./components/courses/MathForCS"
import TopNavbar from './components/TopNavbar';
import SignUpSignIn from './components/SignUpSignIn';


class App extends Component {

  state = {
    signUpSignInError: "",
    authenticated: localStorage.getItem("token") || false
  };

  handleSignUp = (credentials) => {
    const {username, password, confirmPassword} = credentials;
    if(!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError : "Must provide all fields"
      });
    } else if (confirmPassword !== password) {
      this.setState({
        signUpSignInError: "Your passwords do not match"
      });
    } else {
      fetch("/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((response) => {
        console.log(response)
        return response.json();
      }).then((data) => {
        const {token} = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    };
  };

  // handleSignIn = (credentials) => {
  //   const {username, password} = credentials;
  //   if(!username.trim() || !password.trim()){
  //     this.setState({
  //       signUpSignInError: "Please provide username and password"
  //     });
  //   } else {
  //     fetch("/sessions", {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(credentials)
  //     }).then((response) => {
  //       if (response.status === 304) {
  //         return this.setState({
  //           signUpSignInError: "Invalid login"
  //         });
  //       } return response.json()
  //     }).then((data) => {
  //       const {token} = data;
  //       localStorage.setItem("token", token);
  //       this.setState({
  //         signUpSignInError: "",
  //         authenticated:token
  //       });
  //     });
  //   };
  // };

  handleSignIn(credentials) {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: 'Must Provide All Fields',
      });
    } else {
      fetch('/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
        .then((res) => {
          if (res.status === 401 || res.status === 304) {
            console.log('invalid login');
            this.setState({
              signUpSignInError: 'Invalid login.',
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          const { token } = data;
          localStorage.setItem('token', token);
          this.setState({
            signUpSignInError: '',
            authenticated: token,
          });
        });
    }
  } 

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  };

  renderSignUpSignIn = () => {
    return (
      <SignUpSignIn
        error={this.state.signUpSignInError}
        onSignUp={this.handleSignUp}
        onSignIn={this.handleSignIn}/>
    );
  };

  renderApp = () => {
    return (
      <div className="protectedContent">
        <Sidebar />
          <div className="courseMaterial" style={this.moduleWidth()}>
            <Switch>
              <Route path="/sicp" component={SICP}/>
              <Route path="/algorithms-and-data-structures" component={AlgorithmsDataStructures}/>
              <Route path="/computer-architecture" component={ComputerArchitecture}/>
              <Route path="/computer-networking" style={{display: "flex"}} component={ComputerNetworking}/>
              <Route path="/databases" component={Databases}/>
              <Route path="/distributed-systems" component={DistributedSystems}/>
              <Route path="/languages-and-compilers" component={LanguagesAndCompilers}/>
              <Route path="/math-for-cs" component={MathForCS}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </div>
      </div>
      
    )
  }

  moduleWidth = () => this.props.sidebarIsOut ? {width: "75%"} : {width: "93%"}
      
  render() {

    let whatToShow;
    if(this.state.authenticated){
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }

    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar
            showNavItems={this.state.authenticated}
            onSignOut={this.handleSignOut} />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
