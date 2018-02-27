import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';


const numbers = [1,2,3,4,5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home}/>

      </div>

    );
  }
}

export default App;
