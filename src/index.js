import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'
import App from './router/App'

import './index.css'
import 'antd/dist/antd.css'
import '@alicloud/console-components/dist/wind.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
// ReactDOM.render(<App />, document.getElementById('root'))
