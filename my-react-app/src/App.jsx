import React, { Component } from 'react';
import './App.css';
import Child from "./child";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className='app'>hello world</h1>
        <Child name={"Abdulrahman"} />
      </div>
    )
  }
}

export default App
