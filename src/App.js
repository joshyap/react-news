import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

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
        {list.map(function(item) {
          return (
            <div key={item.objectID}>
              <span><a href={item.url}>{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
