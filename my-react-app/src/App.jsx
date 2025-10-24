import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
// import SideBar from './SideBar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={"main-layout"}>
          <div className={"posts"}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* <SideBar /> */}
        </div>
      </div>
    );
  }
}
export default App;
