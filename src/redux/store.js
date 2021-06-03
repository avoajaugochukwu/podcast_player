import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { homePodcastReducer } from './reducers/homePodcastsReducer'

const initialState = {
    home: {
        homePodcasts: localStorage.getItem('homePodcasts') ? JSON.parse(localStorage.getItem('homePodcasts')) : {},
    }
}


const reducer = combineReducers({
    home: homePodcastReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store