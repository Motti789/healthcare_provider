import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom'
import  Footer from '../src/components/Footer'

import App from './components/App'
import {rootReducer} from './reducers/rootReducer'


const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDom.render(
  <Provider store={store}>
    <Router>
    < Navbar />
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)