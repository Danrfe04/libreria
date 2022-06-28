import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({prod}) => {

  const [isAdded,setAdded] = React.useState(false);
  useEffect(()=>{
    if(useState === false){

    }
  }
  )


  function handleOnAdd(qt) {
    setAdded(true);
    
}

  return (
    <div>
        <h2>{prod.name}</h2>
        <img src={prod.img} alt=""></img>
        <p>{prod.id}</p>
        <p>{prod.stock}</p>
        <p>{prod.price}</p>
        <ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
    </div>
  )
}

export default ItemDetail