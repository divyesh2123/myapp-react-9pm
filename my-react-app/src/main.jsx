import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PDisplay from './Display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PDisplay />
  </StrictMode>,
)
