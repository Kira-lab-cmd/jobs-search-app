import Router from "./src/Router";
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}