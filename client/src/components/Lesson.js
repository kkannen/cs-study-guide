import React, { Component } from 'react';
import Playlist from './Playlist';
import TextbookChapter from './TextbookChapter';
import ChapterNumber from './ChapterNumber';
import Checkbox from '@material-ui/core/Checkbox';


class Lesson extends Component {

    state = {
        videoVisible: false,
        textbookVisible: false,
        checked: false,
        chapterSelected: null
    }
    

    handleCheck = () => this.state.checked ? 
        this.setState({checked: false}) : 
        this.setState({checked: true});

    toggleVideo = () => this.state.videoVisible ? 
        this.setState({videoVisible: false}) : 
        this.setState({videoVisible:true, textbookVisible: false, chapterSelected: ""});

    toggleTextbook = (chapNum) => {
        const lastChapterSelected = this.state.chapterSelected
        return (chapNum !== lastChapterSelected) ? 
        this.setState({textbookVisible: true, chapterSelected: chapNum, videoVisible:false}) : 
        this.setState({textbookVisible:false});
    }

      renderPlaylists = () => this.state.videoVisible ? 
        <Playlist playlist={this.props.lesson["playlist"]}/> : null;
  
      renderChapterNumbers = () => {
        const chapterNumbers = Object.keys(this.props.lesson["reading"]);
        return chapterNumbers.map((chapNum, i) => 
            <ChapterNumber 
                key={i}
                clickEvent={()=>this.toggleTextbook(chapNum)}
                chapterNumber={chapNum}/>)
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

      handleCheck = () => this.state.checked ? 
        this.setState({checked: false}) : 
        this.setState({checked: true})

      handleProgress = () => !this.state.checked ? 
        this.props.increase() : 
        this.props.decrease();
     
    render() {
        return(
            <div className="Lesson" >
                <div className="lesson">
                    <Checkbox 
                    onClick={this.handleCheck} 
                    onChange={this.handleProgress}/>
                    <h4>{this.props.lesson["lessonNumber"]}</h4>
                    <h4>{this.props.lesson["title"]}</h4>
                    <div className="chapNums">{this.renderChapterNumbers()}</div>
                    <div className="iconContainer">
                        <i className="material-icons" onClick={this.toggleVideo}>play_circle_outline</i>
                    </div>
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