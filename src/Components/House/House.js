import React, { Component } from 'react'

class House extends Component {
  render(){
    const {house} = this.props
    console.log(this.props)
      return(
      <div className='house'>
        <button className='deleteHouse' onClick={() => this.props.deleteHouse(house)}>X</button>
        <div className='info'>Property Name: {house.name}</div>
        <div className='info'>Address: {house.address}</div>
        <div className='info'>City: {house.city}</div>
        <div className='info'>State: {house.state}</div>
        <div className='info'>Zip: {house.zip}</div>
      </div>
    )

  }
}

export default House;