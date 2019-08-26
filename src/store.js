import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import myEntries from './reducers/myEntries.js'
import currentUser from './reducers/currentUser.js'
import entryForm from './reducers/entryForm.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    currentUser: currentUser,
    loginForm,
    myEntries,
    signupForm,
    entryForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store;
