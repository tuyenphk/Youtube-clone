import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Video from './components/Video/Video'

import './App.css'

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header />
      <div className="app-page">
        {/*Sidebar*/}
        <Sidebar />
        {/*Recommended videos*/}
        <Video />
      </div>
    </div>
  );
}

export default App;
