import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import Store from './Store.js'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
     <Provider store={Store}>
      <ToastContainer/>
    <App/>
    </Provider>
 
    </BrowserRouter>
)
