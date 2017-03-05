import React from 'react'
import { render } from 'react-dom'

import { HelloWorld } from './components'


export default function() {
  const mountNode = document.getElementById('mount-node')
  render(<HelloWorld />, mountNode)
}

