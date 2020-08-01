import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components'
import { Index, NotFound } from './pages'

export const App: React.FC<{}> = () => {
  console.log('logo by:', 'jessicajimantoro@gmail.com')
  console.log('content by:', ' devinryanriota@gmail.com, me@clavinjune.dev')

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
      <Footer />
    </Router>
  )
}
