// src/App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import DynamicMovieList from './components/DynamicMovieList';
import './App.css'
import data from './data';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>

        <h1>Dynamic Movie List</h1>
        <DynamicMovieList moviesArray={data} />
      </div>
    );
  }
}

export default App;