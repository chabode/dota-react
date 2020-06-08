import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import DotaTable from './components/dotaTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <h3>All Heroes to Latest Patch</h3>
        </Navbar>
        <DotaTable />

      </header>
    </div>
  );
}

export default App;
