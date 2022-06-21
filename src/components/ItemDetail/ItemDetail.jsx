import React from 'react'

const ItemDetail = ({prod}) => {
  return (
    <div>
        <h2>{prod.name}</h2>
        <img src={prod.img} alt=""></img>
        <p>{prod.id}</p>
        <p>{prod.stock}</p>
        <p>{prod.price}</p>
    </div>
  )
}

export default ItemDetail