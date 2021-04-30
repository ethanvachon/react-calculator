import React from 'react';
import './main.css'

function Button(props) {
  return (
    <button className={"bg-white flex justify-center rounded-full p-5 button text-white text-3xl " + props.className}>
      {props.value}
    </button>
  );
}

class Display extends React.Component{
  render() {
    return (
      <div className="bg-white rounded position">
        test
      </div>
    );
  }
}
class Buttons extends React.Component {
  renderButton(i, color) {
    return <Button value={i} className={color}/>
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-around my-5">
          {this.renderButton("C", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton(" ", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton("%", "bg-gray-400 hover:bg-gray-500")}
          {this.renderButton("÷", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("7", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("8", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("9", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("x", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("4", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("5", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("6", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("-", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("1", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("2", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("3", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("+", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("0", "bg-gray-600 hover:bg-gray-700 zero")}
          {this.renderButton(".", "bg-gray-600 hover:bg-gray-700")}
          {this.renderButton("=", "bg-yellow-500 hover:bg-yellow-600")}
        </div>
      </div>
    );
  }
}
class Calculator extends React.Component{
  render() {
    return(
      <div className="h-screen flex items-center justify-center">
        <div className="custom-sizing bg-black rounded">
          <div className="mt-8 mb-4 flex justify-center">
            <Display />
          </div>
          <div className="px-2">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator