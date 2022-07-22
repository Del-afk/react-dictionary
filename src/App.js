import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import Result from './Result';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Search />
      <Result />
      <Gallery />
    </div>
  );
}

export default App;
