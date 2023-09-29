import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './ext-src/App'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage"

import LoginPage from './ext-src/auth/LoginPage'
import CallbackPage from './ext-src/auth/TwitterCallback'
import GeneratedIdeasPage from './ext-src/GeneratedIdeasPage'
import EmbeddedIdeasPage from './ext-src/EmbeddedIdeasPage'
import SettingsPage from './ext-src/SettingsPage'


const router = (
  <Router>
    <App>
    <Switch>
      <Route exact path="/login" component={ LoginPage }/>
      <Route exact path="/twitter" component={ CallbackPage }/>
      <Route exact path="/" component={ createAuthRequiredPage(GeneratedIdeasPage) }/>
      <Route exact path="/embedded-ideas" component={ createAuthRequiredPage(EmbeddedIdeasPage) }/>
      <Route exact path="/settings" component={ createAuthRequiredPage(SettingsPage) }/>
    </Switch>
    </App>
  </Router>
)

export default router
