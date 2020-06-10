import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import DotaTable from './components/dotaTable'
import HeroDetail from './pages/heroDetail'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar children="All Heroes to Latest Patch" />
        <Switch>
          <Route path="/" exact component={DotaTable}></Route>
          <Route path="/heroes/:id" exact component={HeroDetail}></Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
