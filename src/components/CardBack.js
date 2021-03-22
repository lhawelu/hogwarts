import React, { Component } from 'react'
import piggy from "../porco.png";

class CardBack extends Component {
  
  render(){
    let {pigName, pigSpecialty, pigGreased, pigWeight} = this.props

    return(
      <div>
      <div className='ui card'>
        <div className='content'>
          <div className='ui header'>{pigName}</div>
        </div>
        <div className='content'>
          <h4 className='ui sub header'>Hog Details</h4>
          <div className='ui small feed'>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Specialty: {pigSpecialty}</a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Weight: {pigWeight}</a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Grease Status: {pigGreased? 'Greased':'Not Greased'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      </div>
    )
  }
}

export default CardBack;