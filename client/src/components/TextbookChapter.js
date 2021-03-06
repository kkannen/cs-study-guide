import React, { Component } from 'react';
import PropTypes from "prop-types";

class TextbookChapter extends Component {

  render() {
    return (
      <div className="TextbookChapter">
        <iframe 
          src={this.props.link} 
          align="middle" 
          height="700" 
          width="95%" 
          frameBorder="0" 
          title="title"/>
      </div>
    );
  }
}

TextbookChapter.propTypes = {
  link: PropTypes.string,
};

export default TextbookChapter;