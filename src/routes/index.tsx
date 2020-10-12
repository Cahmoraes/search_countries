import React from 'react'
import { Switch } from 'react-router-dom'
import CountryPage from '../pages/CountryPage'
import Feed from '../pages/Feed'
import NotFound from '../pages/Notfound'

import Route from './Route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/country/:name" component={CountryPage} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  )
}

export default Routes