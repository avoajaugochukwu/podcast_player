
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import Helmet from 'react-helmet'

import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Helmet>
          <title>
            Podcast Player - Apple API
          </title>
          </Helmet> */}
        <SideBar />
        <MainSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
