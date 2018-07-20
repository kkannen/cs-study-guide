import React, { Component } from 'react';
import PropTypes from "prop-types";

class Playlist extends Component {

  render() {
    const playlistLink = "https://www.youtube.com/embed?listType=playlist&list=" + this.props.playlist
    return (
      <div className="Playlist">
        <iframe 
          width="800" 
          height="450" 
          src={playlistLink} 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          showinfo="1" 
          allowFullScreen 
          title="title"/>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.string,
};

export default Playlist;