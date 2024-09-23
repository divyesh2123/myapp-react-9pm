import React, { useState } from 'react'
import Child1 from './Child1'
import LanguageContext from './language/LanguageContext'

export default function Pat() {
    const [data,setData]= useState('en')
  return (
    <LanguageContext.Provider value={{data,setData}}>

        <Child1 />
        
    </LanguageContext.Provider>
  )
}
