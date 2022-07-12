import React, { useState } from 'react'
/* import { useEffect } from 'react'; */
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({prod}) => {

const {addToCart} = useContext(CartContext)

const [isAdded,setAdded,] = useState(0);

  const handleOnAdd = (qtt) => {
    setAdded(qtt);
    addToCart(prod,qtt)
  }

  return (
    <div>
        <h2>{prod.name}</h2>
        <img src={prod.img} alt=""></img>
        <p>{prod.id}</p>
        <p>{prod.stock}</p>
        <p>{prod.price}</p>
        {
          isAdded === 0 ? (
            <ItemCount stock={prod.stock} initial = {1} onAdd = {handleOnAdd} />
          ) : (
            <Link to = "/cart">Ir al carrito</Link>
          )}
    </div>
  )
}

export default ItemDetail