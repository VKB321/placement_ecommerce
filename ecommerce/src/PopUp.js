import React, { useContext, useState } from 'react'
import { store } from './App'
import './popup.css'


const PopUp = () => {
    const[popup, setpopup,product] = useContext(store)
    const[index, setIndex] =useState(popup[1]-0)
    console.log(index, popup)
  return (popup[0] === 1)?(

    <div  className="popup">
        <span>{product[index].category}</span>
        <span></span>
        <span><button onClick={()=>setpopup(0)}>close</button></span>
        <div className='grid'>
            <span><img src={product[index].item_image} alt='image' className='img_popup'></img> </span>
            <span>{product[index].item_name}</span>
        </div>
    </div>
  ):""
}

export default PopUp;
