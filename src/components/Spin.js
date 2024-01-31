import React, { Component } from 'react'
import loading from './loading5.gif'

export class Spin extends Component {
  render() {
    return (
      <div className='text-center' style = {{marginTop : '38vh', marginBottom : '38vh'}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spin
