import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          counter : 0
       }
     }
     
  render() {
      const {counter}=this.state
    return (
      <div>
        <h2>{counter}</h2>
      </div>
    )
  }
}

export default Counter
