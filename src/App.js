
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <MainSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
