import React, { Component } from 'react';
import Dropdown from './Dropdown'
import {getData} from '../api'
class FileSelect extends Component {
  render() {
    return (
      <div className="vcenter">
          <h2>Select Your File</h2>
          <Dropdown actionOnChange={getData}/>
      </div>
    );
  }
}

export default FileSelect;
