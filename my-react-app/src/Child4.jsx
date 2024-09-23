import React, { useContext } from 'react'
import LanguageContext from './language/LanguageContext'

export default function Child4() {

    const {data,setData} = useContext(LanguageContext);

    const o = {

      "en" : {
        "firstName" : "firstName",
        "lastName": "lastName"
      },
      "hi": {

        "firstName": "पहला नाम",
        "lastName": "उपनाम"
      }
    }

  return (
    <div>
      <lable>
          {o[data].firstName}
      </lable>

      <input type='text' placeholder={o[data].firstName}/>
    </div>
  )
}
