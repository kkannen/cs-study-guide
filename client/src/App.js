import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.loadSICPLessons()
    this.setState({list: this.props.sicpLessons})
  }

 s

  // const sort = (arr) => {
  //   let swapped = false;
  //     while(!swapped) {
  //       swapped = true;
  //           for(let x = 0; x < arr.length-1; x++) {
  //             if(arr[x] > arr[x+1]){
  //                 let holdValue = arr[x]; //stores value so it is not lost when arr[x+1] is put in its place
  //                 arr[x] = arr[x+1];
  //                 arr[x+1] = holdValue;
  //                 swapped = false;
  //             }
  //         }
  //     } return arr; //when loop is exited, return sorted arr
  // }


  //this.props.sicpLessons.map((i)=><div>{i.lessonNumber}</div>)

  render() {

    return (
      <div className="App">
      {this.props.sicpLessons.map((i)=><div>{i.lessonNumber}</div>)}
        this will be an app soon
      </div>
    );
  }
}

export default App;
