import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Subscribe } from '@/presentation/pages'


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Subscribe} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
