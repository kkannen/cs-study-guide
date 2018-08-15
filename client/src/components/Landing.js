import React, { Component } from 'react';
import PropTypes from "prop-types";

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
        <h1 style={{fontSize: 50}}>Welcome to your C.S. study guide!</h1>
        <h2 style={{width:"80%"}}>This app is designed to allow you to easily navigate several important subjects within the field of computer science.</h2>
        <p style={{width:"70%"}}><strong style={{color: "#270C75"}}>DISCLAIMER: None of these resources are my own. This page is meant to be a collection of materials that I found helpful and informative, and that I organized in a way that I believe makes them easier to navigate.</strong><br/>Each module on this page includes a textbook and video lecture series. I reccomend completing the modules in the order they are presented, but of course, you do not have to.</p>
        <hr style={{width: "80%", color: "#3C0079"}}/>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
            </tbody>
          {this.renderClassPreview()} 
        </table>
        <hr style={{width: "80%", color: "#3C0079"}}/>
        <h2 style={{fontSize: 28}}>Here are some other resources that might be useful or interesting:</h2>
        <div style={{display:"flex", justifyContent: "space-around", width: "90%"}}>
          <div className="useful">
            <a href= "https://www.youtube.com/playlist?list=PLME-KWdxI8dcaHSzzRsNuOLXtM2Ep_C7a" target="blank"  style={{color: "#ED6562"}}> 
              <h2> Crash Course Computer Science</h2>
            </a>
            <p>This playlist hosted by Carrie Anne Philbin at Crash Course gives a great and thourough overview of some basic computer science concepts, as well as some history, and great CS puns.</p>
          </div>
          <div className="useful">
            <a href="https://teachyourselfcs.com/" target="blank" style={{color: "#ED6562"}}>
              <h2>Teach Yourself CS </h2>
            </a>
            <p>This is the website from the Bradfield School of Computer Science that inspired this app.</p>
          </div>
          <div className="useful">
            <a href="http://www.computersciencedegreehub.com/top-30-computer-science-programming-blogs-2014/" target="blank" style={{color: "#ED6562"}}>
              <h2>CS and Progreamming Blogs </h2>
            </a>
            <p>This article is a list of the top 30 computer science and programming blogs.</p>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  listOfModules: PropTypes.array,
};

export default Landing;