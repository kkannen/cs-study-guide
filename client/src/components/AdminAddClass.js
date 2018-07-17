import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AdminAddClass extends Component {

  state = {
    addedClass: {
      title: "",
      reading: "",
      playlist: ""
    }
  }

  submitNewClass = (e) => {
    e.preventDefault();
    if(this.props.adminAddClass) {
      this.props.adminAddClass(this.state.addedClass)
      console.log(this.props.addedClassesList)
    }
  }

  handleTitleInput = (e) => {
    const addedClass = { title: e.target.value };
    this.setState({addedClass: Object.assign(this.state.addedClass, addedClass)})
  }

  handleReadingInput = (e) => {
    const addedClass = { reading: e.target.value };
    this.setState({addedClass: Object.assign(this.state.addedClass, addedClass)})
  }

  handlePlaylistInput = (e) => {
    const addedClass = { playlist: e.target.value };
    this.setState({addedClass: Object.assign(this.state.addedClass, addedClass)})
  }

  render() {
    return (
      <div className="adminAddClass">
        <h1>Add a class:</h1>
        <TextField
          label="Lesson Title"
          placeholder="Lesson Title"
          fullWidth
          onChange={ (e) => this.handleTitleInput(e)}/>
        <TextField
          label="Reading"
          placeholder="Reading"
          fullWidth
          onChange={ (e) => this.handleReadingInput(e)}
        />
        <TextField
          label="Video URL"
          placeholder="VideoUrl"
          fullWidth
          onChange={ (e) => this.handlePlaylistInput(e)}
        />
        <Button variant="contained" onClick={(e) => this.submitNewClass(e)}>Add Class</Button>
      </div>
      
    );
  }
}

export default AdminAddClass;
