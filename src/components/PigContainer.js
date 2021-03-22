import React from 'react'
import PigCard from './PigCard'

export default class PigContainer extends React.Component{

  render(){
    return (
      <div className='ui link cards'>
        {this.props.pigs.map((pigData, index) => <PigCard pig={pigData} key={index}/>)}
      </div>
    )
  }
}