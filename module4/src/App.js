import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Chotu", age: 24 },
      { name: "Daxeel", age: 22 },
      { name: "Hemil", age: 26 },
    ],
    showPersons: false,
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 24 },
        { name: "Daxeel", age: 25 },
        { name: "Hemil", age: 290 },
      ],
    });
  };

  // React pass the event object by default
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Chotu", age: 24 },
        { name: event.target.value, age: 25 },
        { name: "Hemil", age: 290 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const currentShowPerson = this.state.showPersons;
    this.setState({ showPersons: !currentShowPerson });
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: "inherit",
      boarder: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map(person => {
            return <Person name = {person.name} age={person.age}/> 
          })} 
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hey I am creating my first react App</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          {" "}
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
 