import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store;
