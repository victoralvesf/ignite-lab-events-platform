import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
