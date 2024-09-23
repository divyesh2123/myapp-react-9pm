import React, { useContext } from 'react'
import Child2 from './Child2'
import LanguageContext from './language/LanguageContext'

export default function Child1() {

  const {data,setData} = useContext(LanguageContext)
  return (
    <div>
        <select onChange={(e)=>{
          setData(e.target.value)
        }}>

            <option value="en">english</option>
            <option value="hi">hindi</option>
        </select>

        <Child2/>
    </div>
  )
}
