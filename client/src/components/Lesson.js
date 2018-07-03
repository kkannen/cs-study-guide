import React, { Component } from 'react';
import Playlist from './Playlist';
import TextbookChapter from './TextbookChapter';
import ChapterNumber from './ChapterNumber';


class Lesson extends Component {

    state = {
        videoVisible: false,
        textbookVisible: false,
        checked: false,
        chapterSelected: null
    }

    handleCheck = () => this.state.checked ? this.setState({checked: false}) : this.setState({checked: true});

    toggleVideo = () => this.state.videoVisible ? this.setState({videoVisible: false}) : this.setState({videoVisible:true, textbookVisible: false, chapterSelected: ""});

    toggleTextbook = (chapNum) => {
      if(!this.state.textbookVisible && !this.state.chapterSelected) {
        this.setState({textbookVisible: true, chapterSelected: chapNum})
        } if(this.state.textbookVisible && this.state.chapterSelected) {
            const lastChapterSelected = this.state.chapterSelected
            return (chapNum !== lastChapterSelected) ? this.setState({textbookVisible: true, chapterSelected: chapNum}) : this.setState({textbookVisible:false});
        } if(!this.state.textbookVisible && this.state.chapterSelected) {
            this.setState({textbookVisible: true, chapterSelected: chapNum})
      }
    }

      renderPlaylists = () => this.state.videoVisible ? <Playlist playlist={this.props.lesson["playlist"]}/> : null;
  
      renderChapterNumbers = () => {
        const chapterNumbers = Object.keys(this.props.lesson["reading"]);
        return chapterNumbers.map((chapNum, i) => <ChapterNumber clickEvent={()=>this.toggleTextbook(chapNum)} key={i} chapterNumber={chapNum}/>)
      }

      renderTextbook = () => {
        if(this.state.textbookVisible && Object.keys(this.props.lesson["reading"])[0] === "none"){
          return null
        } else if (this.state.textbookVisible) {
          const link = this.props.lesson["reading"][this.state.chapterSelected];
          return(
            <TextbookChapter link={link}/>
          )
        } return null
      }
     
    render() {
        return(
            <div className="lecture" style={{width:"100%"}} >
                <div className="lectureRow">
                    <h4>{this.props.lesson["lessonNumber"]}</h4>
                    <h4>{this.props.lesson["title"]}</h4>
                    <div>{this.renderChapterNumbers()}</div>
                    <i className="material-icons" onClick={this.toggleVideo}>play_circle_outline</i>
                </div>
                <div>
                    {this.renderPlaylists()}
                    {this.renderTextbook()}
                </div>
            </div>
        )
    }
}
export default Lesson;