import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Video from './components/Video/Video'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm"> </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar />
              <Video />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
