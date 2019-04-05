import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../store'
import {UPDATE_STEP1} from '../store'

class Step1 extends Component {
  constructor(props){
    super(props)
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  saveChanges(){
    const {name, address, city, state, zip} = this.state
    store.dispatch({
      type: UPDATE_STEP1,
      payload: {name, address, city, state, zip}
    })
  }

  componentDidMount(){
    store.subscribe(() => this.setState({
      store: store.getState()
    }))
  }

  render() {
    const {name, address, city, state, zip} = this.state
    return(
      <div>
        Property Name
        <input name='name' value={name} onChange={this.handleChange} />
        Address
        <input name='address' value={address} onChange={this.handleChange} />
        City
        <input name='city' value={city} onChange={this.handleChange}/>
        State
        <input name='state' value={state} onChange={this.handleChange}/>
        Zip
        <input name='zip' value={zip} onChange={this.handleChange}/>
        <Link to='/wizard/step2'> <button onClick={() => this.saveChanges()} >Next Step</button></Link>
      </div>
    )
  }
}

export default Step1