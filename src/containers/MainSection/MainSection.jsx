import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import Search from '../../screens/Search'
import PodcastDetails from '../../screens/PodcastDetails'


const MainSection = () => {
  return (
    <>
      <main className=" player-section md:pl-60 min-h-screen">
        <div className="px-4">
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/Search" component={Search}></Route>
            <Route exact path="/podcast/:collectionId" component={PodcastDetails}></Route>
          </Switch>
        </div>
      </main>
    </>
  )
}



export default MainSection