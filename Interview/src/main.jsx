import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dropdown from './Dropdown.jsx'
import Checkbox from './Checkbox.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dropdown />
    <Checkbox />
  </React.StrictMode>,
)
