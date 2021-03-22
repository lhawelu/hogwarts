import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'


class PigCard extends Component {

  state = {
    defaultView: true
  }

  handleClick = () => {
    this.setState({
      defaultView: !this.state.defaultView
    })
  }

  render() {
    let {name, specialty, greased, weight, 'highest medal achieved':highest_medal_achieved } = this.props.pig
    let imageName = name.toLowerCase().replace(/\s/g, '_')
    let pigImage = require(`../hog-imgs/${imageName}.jpg`) 
   
    return (
      <div className='ui card' onClick={this.handleClick} key={this.props.index}>
        {this.state.defaultView ? <CardFront pigName={name} image={pigImage}/> : <CardBack pigName={name} image={pigImage} pigSpecialty={specialty} pigGreased={greased} pigWeight={weight} pigMedal={highest_medal_achieved}/>}
      </div>
    )
  }
}

export default PigCard;