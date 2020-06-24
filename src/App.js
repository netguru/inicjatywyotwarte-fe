import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { withTracker } from 'utils/GoogleAnalytics'

import Routes from 'routes';

import 'App.css'

function App () {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route component={withTracker(Routes)} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
