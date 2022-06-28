import { Link } from 'react-router-dom';
import React from 'react'

const Item = ({item}) => {
  const urlDetalle = `/detalle/${item.id}`
  return (
    <div>
        <div>
            <img src={item.img} alt="" width="400"/>
        </div>
        <div>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
            <Link to={urlDetalle}>
              <button>Ver detalle</button> 
            </Link>
        </div>
    </div>
  )
}

export default Item