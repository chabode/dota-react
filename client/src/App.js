import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Navbar from './components/Navbar'
import DotaTable from './pages/dotaTable'
import HeroDetail from './pages/heroDetail'
import FavouriteList from './pages/favouriteList'

function App() {
  return (
    <Router>
    <div className="App">
      <Provider store={store}>
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route path="/" exact component={DotaTable}></Route>
          <Route path="/heroes/:id" component={HeroDetail}></Route>
          <Route path="/favourite" component={FavouriteList}></Route>
        </Switch>
      </header>
      </Provider>
    </div>
    </Router>
  );
}

export default App;
