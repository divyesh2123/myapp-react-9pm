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

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Account from './Account.jsx'
import HLogin from './HLogin.jsx'
import Parent from './Parent.jsx'
import ReadMore from './ReadMore.jsx'
import ErrorBoundry from './ErrorBoundry.jsx'
import MyCrud from './MyCrud.jsx'
import Pat from './Pat.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import CounterRedux from './CounterRedux.jsx'
import UserRedux from './UserRedux.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ErrorBoundry>

      <Routes>
        
        <Route path='/' element={<HLogin></HLogin>}></Route>
        <Route path='/ac' element={<Account></Account>}></Route>
        <Route path='/parent' element={<Parent></Parent>}></Route>
        <Route path='/readmore' element={<ReadMore text="This is the asfsdfsddddddddd sdfsdfsdf sdfsdfsdf sdfsdfsdfdsf dsfsdfsdF sdfsdFSDFSDF"></ReadMore>} />
        <Route path='/crud' element={<MyCrud></MyCrud>}></Route>
        <Route path='/Pat' element={<Pat></Pat>}></Route>
        <Route path='/redux' element={<CounterRedux></CounterRedux>}></Route>
     
        <Route path='/userRedux' element={<UserRedux></UserRedux>}/>
      </Routes>
      </ErrorBoundry>

      </Provider>
    </BrowserRouter>
    
    
  </StrictMode>,
)
