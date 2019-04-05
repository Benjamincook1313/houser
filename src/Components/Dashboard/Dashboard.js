import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houses: []
    }
  }

  componentDidMount=()=>{
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    }).catch(err => console.log('Problem getting houses'))
  }

  deleteHouse(house){
    axios.delete(`/api/house/${house.id}`).then(res => {
      this.setState({
        houses: [res.data]
      })
    }).catch(err => console.log(err, 'Problem deleting house'))
  }

  render(){
    const { houses } = this.state
    let displayHouses = houses.map((house, i) => {
      return <House key={i} house={house} deleteHouse={this.deleteHouse}/>
    })

    return(
      <div className='wizard' >
        <div className='title'>
          <h3>Dashboard</h3>
          <Link to='/wizard/step1' ><button>Add New Property</button></Link>
        </div>
          { displayHouses }
      </div>    
    )
  }
}

export default Dashboard;