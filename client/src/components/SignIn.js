import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignIn({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} style={{marginTop: 5}}>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="email"
            name="username"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Username"
            value={this.state.username}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <Button type="submit">
         Sign In
       </Button>
      </form>
    );
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;
