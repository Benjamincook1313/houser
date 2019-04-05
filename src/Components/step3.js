import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Step3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      monthlyMortgage: 0,
      desiredMortgage: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  createHouse(house){
    axios.post('/api/house', {house}).then(house => {
      this.setState({
        monthlyMortgage: 0,
        desiredMortgage: 0
      })
    }).catch(err => console.log('Problem adding new house'))
  }

  render() {
    const {monthlyMortgage, desiredMortgage} = this.state
    return(
      <div>
        <input name='monthlyMortgage' value={monthlyMortgage} onChange={this.handleChange}/>
        <input name='desiredMortgage' value={desiredMortgage} onChange={this.handleChange}/>
        <Link to='/wizard/step2' ><button>Previous Step</button></Link>
        <button onClick={() => this.createHouse()} >Complete</button>
      </div>
    )
  }
}

export default Step3