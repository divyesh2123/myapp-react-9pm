import React, { useState } from 'react'

export default function ReadMore({text}) {

    const [isReadMore,setReadMore]= useState(true);

    const handleReadMoreInfo= ()=>{
      setReadMore(!isReadMore);
    }

    const returm = ()=>{


        console.log("I called again");
       return text.slice(0,30).concat("....readMore");
    }

    if(1==1)
    {

    const p = React.useMemo(()=>{
        console.log("I called again");
        return text.slice(0,30).concat("....readMore");
    },[text])
}
    
  return (
    <div onClick={handleReadMoreInfo}>
        
            {isReadMore ? p: text.concat("...readless") }

    </div>
  )
}
