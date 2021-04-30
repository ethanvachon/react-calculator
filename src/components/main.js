import React from 'react';
import './main.css'

function Button(props) {
  return (
    <button className="bg-white rounded-full p-5 button">
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
  renderButton(i) {
    return <Button value={i} />
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton("%")}
          {this.renderButton("C")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("÷")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("X")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("-")}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton("0")}
          {this.renderButton(".")}
          {this.renderButton("=")}
          {this.renderButton("+")}
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
          <div className="mt-14 mb-4 flex justify-center">
            <Display />
          </div>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Calculator