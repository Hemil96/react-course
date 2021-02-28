import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:"1", name: "Chotu", age: 24 },
      { id:"2", name: "Daxeel", age: 22 },
      { id:"3", name: "Hemil", age: 26 },
    ],
    showPersons: false,
  };

  // React pass the event object by default
  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons] // getting the copy of persons
    // Getting the index for the person we want to undate
    const personObjectIndex = persons.findIndex((p) => {
      return p.id = id;
    })
    // getting the personObject with index
    const person = {
      ...this.state.persons[[personObjectIndex]],
    }
    // Binding the name target value
    person.name = event.target.value;

    // Assignging the updated person in the arrey of functions
    persons[personObjectIndex] = person;
    // Updating state
    this.setState({persons})
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons})
  }

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
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click={()=> this.deletePersonHandler(index)}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}
              />;
          })}
        </div>
      );
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
