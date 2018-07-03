import React, { Component } from 'react';

class TextbookChapter extends Component {

  render() {

    return (
        <div className="TextbookChapter">
            <iframe src={this.props.link} align="middle" height="700" width="95%" frameBorder="0" title="title"/>
        </div>
    );
  }
}

export default TextbookChapter;