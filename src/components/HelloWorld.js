import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div className='filterSort'>
        <label name='greased'>Filters: </label>
        <select onChange={(e) => this.props.submitFunction(e)} name='greased' className='ui dropdown'>
          <option value='all'>All</option>
          <option value='true'>Greased</option>
          <option value='false'>Not Greased</option>
        </select>
        <div>
          <button onClick={(e) => this.props.sortFunction(e)} value='name'>Sort by Name</button>
          <button onClick={(e) => this.props.sortFunction(e)} value='weight'>Sort by Weight</button>
        </div>
        <div>
          <h4>Currently sorting by: {this.props.sortStatus}</h4>
        </div>
      </div>
    );
  }
}

export default HelloWorld;
