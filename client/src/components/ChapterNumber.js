import React, { Component } from 'react';

class ChapterNumber extends Component {

  render() {

    return (
      <h4 className="ChapterNumber" onClick={this.props.clickEvent}>
        {this.props.chapterNumber}
      </h4>
    );
  }
}

export default ChapterNumber;