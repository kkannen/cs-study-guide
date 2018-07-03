import React, { Component } from 'react';

class ChapterNumber extends Component {

  render() {

    return (
      <div className="ChapterNumber" onClick={this.props.clickEvent}>
        {this.props.chapterNumber}
      </div>
    );
  }
}

export default ChapterNumber;