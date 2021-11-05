import StoreProvider from 'components/context/Provider'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot
