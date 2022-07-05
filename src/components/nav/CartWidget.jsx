import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cartimg from "../img/icons8-carro-favorito-90.png"


export default function CartWidget() {
  const {totalCart} = useContext(CartContext)
  return (
    <div>
        <img src={cartimg} alt="Carro" width="20px"/>
        <p>({totalCart})</p>
    </div>
  )
}
