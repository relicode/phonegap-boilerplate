import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import rootReducer from './reducers'
import { MainApplication } from './components'


const store = createStore(rootReducer)

export default function() {
  const mountNode = document.getElementById('mount-node')
  render(
    <Provider store={store}>
      <MainApplication />
    </Provider>
  , mountNode)
}

