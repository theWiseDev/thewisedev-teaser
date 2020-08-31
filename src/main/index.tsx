import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.scss'

import { Router } from '@/presentation/components'
import { makeSubscribe } from './factories/pages/subscribe/subscribe-factory'

ReactDOM.render(
  <Router makeSubscribe={makeSubscribe} />,
  document.getElementById('main'),
)
