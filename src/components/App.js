import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigContainer from "./PigContainer"

class App extends Component {

  state={
    filterStatus: 'all', 
    filterBy: 'default'
  }

  handleFilterSubmit = (e) => {
    this.setState({
      filterStatus: e.target.value
    })
  }

  handleSortSubmit = (e) => {
    this.setState({
      filterBy: e.target.value
    })
  }

  pigFilterList = () => {
    if (this.state.filterStatus === 'true') {
      return hogs.filter(hog => hog.greased === true)
    } else if (this.state.filterStatus === 'false') {
      return hogs.filter(hog => hog.greased === false)
    } else {
      return hogs
    }
  }

  pigSortList = (e) => {
    let pigList = this.pigFilterList()
    return pigList.sort((a, b) => (a[this.state.filterBy] > b[this.state.filterBy] ? 1 : -1))
  }
  

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld submitFunction={this.handleFilterSubmit} sortFunction={this.handleSortSubmit} sortStatus={this.state.filterBy}/>
        <PigContainer className="ui grid container" pigs={this.pigSortList()} />
      </div>
    );
  }
}

export default App;
