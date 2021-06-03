
import React from 'react'
import Home from './screens/Home'
import Search from './screens/Search'
import PodcastDetails from './screens/PodcastDetails'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Search" component={Search}></Route>
          <Route exact path="/podcast/:collectionId" component={PodcastDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
