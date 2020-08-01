import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components'
import { Index, NotFound } from './pages'

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Header />
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
