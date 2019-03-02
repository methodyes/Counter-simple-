import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      title: "Change the count"
    };
  }
  clickToInc = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  clickToDec = () => {
    var valu = this.state.counter;
    if (valu <= 0) {
      return this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter - 2
      });
    }
  };
  clickToMul=()=>{
    this.setState({
      counter: this.state.counter * 3

    })
  }
  clickToDiv=()=>{
    this.setState({
      counter: this.state.counter / 4

    })
  }
 

  render() {
    const { counter, title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1 className="count">{counter}</h1>
        <div>
        <button className="but0" onClick={this.clickToReset}>Reset</button> 
        </div>
        <button className="but1" onClick={this.clickToInc}>INCREASE BY 1</button> 
        <button className="but2" onClick={this.clickToDec}>DECREASE BY 2</button>
        <button className="but3" onClick={this.clickToMul}>MULTIPLY BY 3</button>
        <button  className="but4" onClick={this.clickToDiv}>DIVIDE BY 4</button>
      </div>
    );
  }
}

export default Counter;
