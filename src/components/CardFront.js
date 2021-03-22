import React, { Component } from 'react'

class CardFront extends Component {
  render(){
    return(
      <div className="image content description">
        <img src={this.props.image} alt={`${this.props.pigName}`}/>
        <h3>{this.props.pigName}</h3>
      </div>
    )
  }
}

export default CardFront;
