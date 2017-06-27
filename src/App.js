import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './MyComp'

class App extends Component {
    state = { click: false }

  myClickFunc = () => {
      this.setState({ click: true })
      console.log('clickity clickcty')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <MyComp click={this.myClickFunc} />
      </div>
    );
  }
}

export default App;
