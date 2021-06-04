import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import SearchScreen from '../../screens/SearchScreen'
import PodcastDetails from '../../screens/PodcastDetails'

import Footer from './Footer'


const MainSection = () => {
  return (
    <>
      <main className=" player-section md:pl-60 min-h-screen">
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/Search" component={SearchScreen}></Route>
            <Route exact path="/podcast/:collectionId" component={PodcastDetails}></Route>
          </Switch>
          <Footer />
      </main>
    </>
  )
}

// isHomeActive true, isSearchActive 
// if search is clicked, isHomeActive to false then isSearchActive to true


export default MainSection