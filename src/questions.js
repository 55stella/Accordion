
import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";



const Questions = (props) => {
    console.log(props)
    const{title,info} = props
    const[clicked, setClicked] = useState(false)
    



  return (
    <div className='single-question'>
     <article className='next'>
     <h5>{title}</h5>
     <button onClick={()=>setClicked(!clicked)}>{clicked?<AiOutlineMinus/>: <AiOutlinePlus/>}</button>
     <p>{clicked ? info :''}</p>
     
     </article>
     

     

    </div>

  )
}

export default Questions