import React from 'react';
import SportsContainer from './containers/SportsContainer';
import GeneralContainer from './containers/GeneralContainer';
import PoliticsContainer from './containers/PoliticsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="newsbox">< SportsContainer /></div>
      <div className="newsbox">< GeneralContainer /></div>
      <div className="newsbox">< PoliticsContainer /></div>

    </div>
  );
}

export default App;
