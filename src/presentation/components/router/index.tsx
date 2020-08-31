import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeSubscribe: React.FC
}

const Router: React.FC<Props> = ({ makeSubscribe }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeSubscribe} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
