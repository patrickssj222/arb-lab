import React, { Component } from 'react';
class FileDisplay extends Component {
  render() {
    const {data} = this.props;
    console.log("subscribed" + data);
    if (data === undefined || data == ""){
      return null;
    }
    const parsedData = JSON.parse(data)
    return (
      <div className="vcenter">
        <h2> Content </h2>
        <div className="table-wrapper-scroll-y">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {Object.keys(parsedData[0]).map(key => (
                    <th>{key}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {parsedData.map(jsonObj => (
                <tr>
                {Object.keys(jsonObj).map(key => (
                  <td>{jsonObj[key]}</td>
                ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*<textarea class="form-control" value={data}></textarea>*/}
      </div>
    );
  }
}

export default FileDisplay;
