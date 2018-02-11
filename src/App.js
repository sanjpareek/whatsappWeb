import React, { Component } from 'react';
import ChatPage from './containers/chatPage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatPage/>
      </div>
    );
  }
}

export default App;
