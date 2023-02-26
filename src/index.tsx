import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App'
import './sass/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
document.addEventListener('DOMContentLoaded', function (event) {
  root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  )
})
