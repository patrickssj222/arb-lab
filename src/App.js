import React, { Component } from 'react';
import {subscribeToTable} from './api'
import FileSelect from './components/FileSelect';
import FileDisplay from './components/FileDisplay';
import './css/index.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {};

    //Content to client
    subscribeToTable((message)=>{
      console.log("subscribing:" + message);
      this.setState({displayData:message});
    })
  }

  render() {
    const {displayData} = this.state;
    return (
      <div className = "row">
        <div className="file-select col-md-6 no-gutter text-center fill">
          <FileSelect/>
        </div>
        <div className="file-display col-md-6 no-gutter text-center fill">
          <FileDisplay data={displayData}/>
        </div>
      </div>
    );
  }
}

export default App;
