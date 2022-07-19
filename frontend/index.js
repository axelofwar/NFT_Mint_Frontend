import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App1'
import { initContract } from './assets/js/near/utils'

//const container = document.querySelector('#root')
//const root = createRoot(container) // createRoot(container!) if you use TypeScript

// window.nearInitPromise = initContract()
//   .then(() => {
//     <App />
//     root.render(<App tab="home" />)
//   })
//   .catch(console.error)

//   ReactDOM.render(<App />, document.getElementById('root'));

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)