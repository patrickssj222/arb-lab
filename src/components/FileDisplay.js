import React, { Component } from 'react';
class FileDisplay extends Component {
  render() {
    const {data} = this.props;
    console.log("subscribed" + data);
    return (
      <div className="vcenter">
        <h2> Content </h2>
        <textarea class="form-control" value={data}></textarea>
      </div>
    );
  }
}

export default FileDisplay;
