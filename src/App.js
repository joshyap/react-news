import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let helloWorld = 'Welcome to the Road to learn React';
    let person = {
      name:"Josh",
      age:"26"
    }
    return (
      <div className="App">
        <h2>{ helloWorld }</h2>
        <h3>My name is { person.name } and I am { person.age } years old.</h3>
        <p>this is a test of hot reloading</p>
        <p><sup>spoiler: it is HOT</sup></p>
      </div>
    );
  }
}

export default App;
