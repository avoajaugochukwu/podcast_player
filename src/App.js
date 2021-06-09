
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'

import './App.css';
// @Todo: Find a way to add the dynamic title to the app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative">
          <SideBar />
          <MainSection />
          <div className="fixed left-0 bottom-0 min-w-full z-10 h-24 bg-gray-800" style={{backgroundColor: "#1a1a1a"}}>Home boy</div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
