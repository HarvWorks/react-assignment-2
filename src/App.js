////////////////////////////////////////////////////////////
//                         App.js                         //
////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import Input from './Input/Input';
import Output from './Output/Output';
import Validation from './Validation/Validation';
import './App.css';

class App extends Component {
  state = {
    value: "Type Here",
    minLength: 5
  }

  deleteCharHandler = (index) => {
    const tempValue = this.state.value.slice(0,index) + this.state.value.slice(index + 1)
    this.setState({value:tempValue});
  }

  changeValueHandler = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    let output = null;
    if (this.state.value.length > this.state.minLength) {
      output = (
        <div>
          {this.state.value.split('').map((char, index) => {
            console.log(char);
            return <Output
              click={this.deleteCharHandler.bind(this, index)}
              value={char}
              key={index}/>
          })}
        </div>
      )
    }
    let validation = "Too short"
    if (this.state.value.length > this.state.minLength) {
      validation = "Long enough"
    }
    return (
      <div className="App">
        <Input
          changed={this.changeValueHandler.bind(this)}
          value={this.state.value} />
        {output}
        <Validation value = {validation} />
      </div>
    );
  }
}

export default App;
