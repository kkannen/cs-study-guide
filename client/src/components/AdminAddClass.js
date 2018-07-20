import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

class AdminAddClass extends Component {

  state = {
    addedClass: {
      title: "",
      readingTitle: "",
      readingLink: "",
      playlist: ""
    }
  }

  inputFields = {
    title: "Lesson Title",
    readingTitle: "Reading Title",
    readingLink: "Reading Link",
    playlist: "Playlist ID"
  }

  submitNewClass = (e) => {
    e.preventDefault();
    this.props.adminAddClass(this.state.addedClass)
    this.setState({addedClass: {
      title:"",
      readingTitle:"",
      readingLink:"",
      playlist:""
    }})
  }

  handleInput = (e, name) => {
    const addedClass = { [name]: e.target.value };
    this.setState({addedClass: Object.assign(this.state.addedClass, addedClass)})
  }

  renderInputs = () => {
    return Object.keys(this.inputFields).map((field, index) => {
      return (
        <TextField
          key={index}
          label={this.inputFields[field]}
          placeholder={this.inputFields[field]}
          fullWidth
          onChange={ (e) => this.handleInput(e, field)}
          value={this.state.addedClass[field]}
          />
      )
    })
  }

  render() {
    return (
      <div className="adminAddClass">
        <h1>Add a class:</h1>
        {this.renderInputs()}
        <Button variant="contained" onClick={(e) => this.submitNewClass(e)}>Add Class</Button>
      </div>
      
    );
  }
}

AdminAddClass.propTypes = {
  adminAddClass: PropTypes.func,
};

export default AdminAddClass;