import React, { Component } from 'react';
import PropTypes from "prop-types";

class ChapterNumber extends Component {

  render() {

    return (
      <h4 className="ChapterNumber" onClick={this.props.clickEvent}>
        {this.props.chapterNumber}
      </h4>
    );
  }
}

ChapterNumber.propTypes = {
  clickEvent: PropTypes.func,
  chapterNumber: PropTypes.string,
};

export default ChapterNumber;