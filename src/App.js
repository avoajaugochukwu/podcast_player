
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'
import Footer from './components/Footer'

import './App.css';
// @Todo: Find a way to add the dynamic title to the app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative">
          <SideBar />
          <MainSection />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
