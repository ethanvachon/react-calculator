import React from 'react';
import './main.css'

function Button() {
  return (
    <button className="bg-white rounded-full">
      button
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
  renderButton() {
    return <Button />
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
        </div>
        <div className="flex justify-around my-5">
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
          {this.renderButton()}
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
          <div className="mt-14 mb-5 flex justify-center">
            <Display />
          </div>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Calculator