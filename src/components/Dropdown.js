import React, { Component } from 'react';

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const { actionOnChange } = this.props;
    actionOnChange(event.target.value);
  }
  render(){
    return (
      <div className = "form-group">
        <select className = "form-control" onChange = {this.handleChange}>
          <option value="">Select your file...</option>
          <option value="dealer_log_2.json">dealer_log_2.json</option>
          <option value="dealer_ranking_2.json">dealer_ranking_2.json</option>
        </select>
      </div>
    );
  }
}
