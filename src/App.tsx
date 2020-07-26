import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Index, NotFound } from './pages'

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
