import React from 'react';
import './main.css'

function Button(props) {
  return (
    <button className={"bg-white flex justify-center rounded-full p-5 button text-white text-3xl mx-2 " + props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Buttons extends React.Component {
  renderButton(i, color) {
    return <Button value={i} className={color} onClick={() => this.props.onClick(i)} />
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-around my-5">
          {/* {this.renderButton(")", "bg-gray-400 hover:bg-gray-500")} */}
          {this.renderButton("C", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton("+/-", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton("%", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton("÷", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton(7, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(8, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(9, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("*", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton(4, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(5, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(6, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("-", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton(1, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(2, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton(3, "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("+", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton(0, "bg-gray-600 hover:bg-gray-700 zero")}
          {this.renderButton(".", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("=", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
      </div>
    );
  }
}
class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: null,
      operator: false
    };
  }
  handleBasic(num) {
    if (num === "C") {
      this.setState({ currentDisplay: null })
    } else if (num === "+/-" && this.state.currentDisplay != null) {
      this.setState({ currentDisplay: this.state.currentDisplay - (this.state.currentDisplay * 2) })
    } else if (this.state.currentDisplay != null && this.state.currentDisplay.length >= 10) {
      return
    } else if (typeof (num) == 'number') {
      num = num.toString()
      if (this.state.currentDisplay == null) {
        this.setState({ currentDisplay: num })
      } else {
        this.setState({ currentDisplay: this.state.currentDisplay + num })
      }
    } else if (num === "." && !this.state.currentDisplay.includes(".")) {
      this.setState({ currentDisplay: this.state.currentDisplay + num })
    } else if (num === "%") {
      if (this.state.currentDisplay.length < 10) {
        this.setState({ currentDisplay: (this.state.currentDisplay / 100).toString() })
      }
    } else if (this.state.currentDisplay != null) {
      if (this.state.operator === false) {
        this.setState({ currentDisplay: this.state.currentDisplay + num, operator: true })
      }
      return
    }
    this.setState({ operator: false })
  }
  handleClick(num) {
    if (num === "=") {
      try {
        this.setState({ currentDisplay: eval(this.state.currentDisplay) })
      } catch (error) {
        console.log("error")
      }
    } else {
      this.handleBasic(num)
    }
  }
  render() {
    return(
      <div className="h-screen flex items-center justify-center">
        <div className="custom-sizing bg-black rounded p-6">
          <div className="mt-5 mb-4 flex justify-center">
            <div className="bg-white rounded position flex items-center text-8xl px-4">
              { this.state.currentDisplay}
            </div>
          </div>
          <div className="px-2">
            <Buttons onClick={(i) => this.handleClick(i)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator