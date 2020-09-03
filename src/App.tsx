import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components'
import { Index, NotFound, About } from './pages'
import ReactGA from 'react-ga'

const GA_TRACKING_ID_PROD = 'UA-176048075-1'
// const GA_TRACKING_ID_DEV= ''

// const GA_TRACKING_ID = process.env.NODE_ENV === 'production' ? GA_TRACKING_ID_PROD : GA_TRACKING_ID_DEV 
const GA_TRACKING_ID = GA_TRACKING_ID_PROD

if(process.env.NODE_ENV === 'production') {
  ReactGA.initialize(GA_TRACKING_ID)
}

export const App: React.FC<{}> = () => {
  console.log('logo by:', 'jessicajimantoro@gmail.com')
  console.log('content by:', ' devinryanriota@gmail.com, me@clavinjune.dev')

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  )
}
