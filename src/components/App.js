import React, { Component } from 'react';

import NavBar from './common/Navbar';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <Routes/>
            </div>
        </div>
    );
  }
}

export default App;
