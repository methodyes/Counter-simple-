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


  render() {
    const { counter, title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1 className="count">{counter}</h1>
        <button className="but1" onClick={this.clickToInc}>INCREASE BY 1</button> 
        <button className="but2" onClick={this.clickToDec}>DECREASE BY 2</button>
        <button className="but3" onClick={this.clickToInc}>MULTIPLY BY 1</button>
        <button  className="but4" onClick={this.clickToInc}>INCREASE BY 1</button>
      </div>
    );
  }
}

export default Counter;
