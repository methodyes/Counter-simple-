import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          counter : 0,
          title : "Change the count"
       }
     }
     
  render() {
      const {counter,title}=this.state
    return (
      <div>
        <h1>{title}</h1>
        <h1 className="count">{counter}</h1>
      </div>
    )
  }
}

export default Counter
