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
import FormikExample from './FormikExample.jsx'
import JobPost from './JobPost.jsx'
import SimpleFormUsingMUI from './SimpleFormUsingMUI.jsx'
import Products from './Products.jsx'
import { User } from './User.jsx'
import { Comments } from './Comments.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import HForm from './HForm.jsx'
import CRUD from './CRUD.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CRUD/>
    
  </StrictMode>,
)
