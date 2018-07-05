import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <h1>Hello, User!</h1>
        <p> Welcome to this website. It is a computer science study guide, meant to mimic the curriculum of a bachelors degree in CS</p>
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