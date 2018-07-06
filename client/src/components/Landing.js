import React, { Component } from 'react';

class Landing extends Component {

  renderClassPreview = () => {
    const listOfModules = this.props.listOfModules
    return listOfModules.map((module, index) => {
      return(
        <tbody key={index}>
          <tr>
            <td>{module.title}</td>
            <td>{module.description}</td>
          </tr>
        </tbody>
      )
    })
  }

  render() {
    return (
      <div className="Landing">
        <h1>Hello!</h1>
        <h2>Welcome to your C.S. study guide!</h2>
        
        <p>This app is designed to take you through several important subjects in the field of computer science.</p>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
            </tbody>
          {this.renderClassPreview()} 
        </table>

        <p>Each module on this page includes a textbook and video lecture series</p>
        <p>I reccomend completing them in the order they are presented, but of course, you do not have to.</p>

        <p>Here are some other resources that might be useful or interesting:</p>
        <a>Crash Course Computer Science</a>
        <a>Teach Yourself CS (the website I ripped off to create this app)</a>
      </div>
    );
  }
}

export default Landing;