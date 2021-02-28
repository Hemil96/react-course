import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    string: '',
    stringLength: ''
  };

  inputChangeHandler = (event) => {
    const string = event.target.value;
    this.setState({ 
      stringLength: string.length,
      string: Array.from(string),
    });
  };

  deleteCharhandler = (index) => {
    const string = this.state.string;
    string.splice(index,1);
    this.setState({
      string: Array.from(string)
    })
  }

  findlength = (str) => {
    const l = str.length;
    return l;
  };

  render() {
    let chars = null;
    if (this.state.string.length > 0) {
      chars = (
        <div>
          {this.state.string.map((char, index) => {
            return (
              <Char
                char={char}
                click={()=>this.deleteCharhandler(index)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hey I am creating my first react App</h1>
        <p>{this.state.stringLength}</p>
        <p>{this.state.string}</p>
        <input
          type="text"
          onChange={(event) => {
            this.inputChangeHandler(event);
          }}
          name="name"
        />
        <Validation length={this.state.stringLength} />
        {chars}
      </div>
    );
  }
}

export default App;
