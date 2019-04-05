import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// import axios from 'axios';
import Step1 from '../step1'
import Step2 from'../step2'
import Step3 from '../step3'

class Wizard extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zip: 0
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   this.createHouse = this.createHouse.bind(this)
  // }

  // handleChange(e){
  //   let {name, value} = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // createHouse(house){
  //   axios.post('/api/house', {house}).then(house => {
  //     this.setState({
  //       name: '',
  //       address: '',
  //       city: '',
  //       state: '',
  //       zip: 0
  //     })
  //   }).catch(err => console.log('Problem adding new house'))
  // }

  render(){
    return (
      <div className='wizard' >
        <Link to='/' ><button>Cancel</button></Link>
        <Route path='/wizard/step1' component={ Step1 }/>
        <Route path='/wizard/step2' component={ Step2 }/>
        <Route path='/wizard/step3' component={ Step3 }/>
      </div>
    )
  }
}

export default Wizard;