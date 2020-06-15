import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
 
import { EmitProvider } from 'react-emit'
 
import { component as Hot } from './scenes/Hot'
import { component as Public } from './scenes/Public'
import { component as Explore } from './scenes/Explore'
import { component as Favorites } from './scenes/Favorites'
 
const EmitApp = () => (
  <EmitProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/hot" component={Hot} />
        <Route path="/public" component={Public} />
        <Redirect path="*" to="/explore" />
      </Switch>
    </BrowserRouter>
  </EmitProvider>
)

export default EmitApp
