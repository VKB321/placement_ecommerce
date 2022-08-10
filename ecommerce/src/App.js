import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import PopUp from './PopUp';
import Pagination from './Pagination';

export const store = createContext();


function App() {
  const[items, setItems] = useState('');
  const[product, setProduct] = useState([])
  const[popup, setPopup] =useState([0,0]);
  const showperpage = 10;
  const [pagenation , setpagenation] = useState({
      start : 0,
      end : showperpage
  })
  const [data,setdata] = useState([])
  useEffect(()=>{
    axios({
    method: 'GET',
    url: "https://api.npoint.io/74526212daacbe4a8032"
   
    }).then((Data)=>{
      console.log(Data.data.item)
      setItems(Data.data.item)
      setProduct(Data.data.item)
    }).catch((err)=>{
      console.log(err)
    })
    
   },[])
  const onPaginationChange = (start,end)=>{
      setpagenation({start : start,end : end})
  }

const selectElectronics=()=>{
  let arr = []
  for(let i = 0 ; i<items.length; i++){
    console.log(items[i].category)
    if('Electronics' === items[i].category){
      arr.push(items[i])
    }
  }
  setProduct(arr)
}
const selectFurniture=()=>{
  let arr = []
  for(let i = 0 ; i<items.length; i++){
    if('Furniture' === items[i].category){
      arr.push(items[i])
    }
  }
  setProduct(arr)
  
}
const selectOutdoor=(e)=>{
  let arr = []
  for(let i = 0 ; i<items.length; i++){
    if('Outdoor' === items[i].category){
      arr.push(items[i])
    }
  }
  setProduct(arr)
}
const selectKitchen=(e)=>{
  let arr = []
  for(let i = 0 ; i<items.length; i++){
    if('Kitchen' === items[i].category){
      arr.push(items[i])
    }
  }
  setProduct(arr)
}
return (
  <store.Provider value={[popup, setPopup, product]}>
  <div>
     <header className='ecommerce_header'><center><h3>Available Products</h3></center> </header>
    <div>
    <button onClick={selectElectronics} id="Electronics">Electronics</button>
        <button onClick={selectFurniture} id="Furniture">Furniture</button>
        <button onClick={selectOutdoor} id="Outdoor">Outdoor</button>
        <button onClick={selectKitchen} id="Kitchen">Kitchen</button>
     
      <PopUp value={[popup, setPopup]}></PopUp>
      <br></br>
      <div className="Ecommerce_containe">
      {product.slice(pagenation.start , pagenation.end).map((e,i)=>{
          return <span key={i}><img src={e.item_image} alt='image' id={i} onClick={(e)=>setPopup([1,e.target.id])} />{e.category}</span>
      })}
      </div>
    </div>
    <div className='pagenation'>
      <Pagination showPerPage ={showperpage} total = {data.length} onPaginationChange = {onPaginationChange}/>
    </div>
  </div>
  </store.Provider>
)

    
}

export default App;
