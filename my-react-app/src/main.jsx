import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PDisplay from './Display.jsx'
import Counter from './Counter.jsx'
import DisplayData from './DisplayData.jsx'
import { Registration } from './Registration.jsx'
import MyFormWithSelect from './MyFormWithSelect.jsx'
import { Login } from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
