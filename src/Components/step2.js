import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../store'

class Step2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const {imageUrl} = this.state
    return(
      <div>
        Image Url
        <input name='imageUrl' value={imageUrl} onChange={this.handleChange}/>
        <div className='nextPrevious' >
          <Link to='/wizard/step1' ><button>previous</button></Link>
          <Link to='/wizard/step3' ><button>Next Step</button></Link>
        </div>
      </div>
    )
  }
}

export default Step2