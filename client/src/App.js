import React from 'react';
import SportsContainer from './containers/SportsContainer';
import GeneralContainer from './containers/GeneralContainer';
import PoliticsContainer from './containers/PoliticsContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="newsbox">< SportsContainer /></div>
      <div className="newsbox">< GeneralContainer /></div>
      <div className="newsbox">< PoliticsContainer /></div>

    </div>
    </Router>
  );
}

export default App;
