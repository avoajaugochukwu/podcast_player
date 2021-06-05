import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import SearchScreen from '../../screens/SearchScreen'
import PodcastDetailsScreen from '../../screens/PodcastDetailsScreen'
import GenreListScreen from '../../screens/GenreListScreen'


import Footer from './Footer'

const MainSection = () => {
  return (
    <>
      <main className=" player-section md:pl-60 min-h-screen">
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/Search" component={SearchScreen}></Route>
          <Route exact path="/podcast/:collectionId" component={PodcastDetailsScreen}></Route>
          <Route exact path="/genre/:genreId" component={GenreListScreen}></Route>
        </Switch>
        <Footer />
      </main>
    </>
  )
}

export default MainSection