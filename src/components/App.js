import React, { Component } from 'react';
import WeConnectNavBar from './navbar'

class App extends Component {
  render() {
    return (
        <div>
            <WeConnectNavBar/>
            <div className="container">
                <h1 className="text-center">Welcome to we-connect client</h1>
            </div>
        </div>
    );
  }
}

export default App;
