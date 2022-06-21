import React from 'react'

const Item = ({item}) => {
  console.log(item);
  return (
    <div>
        <div>
            <img src={item.img} alt="" width="400"/>
        </div>
        <div>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>

        </div>
    </div>
  )
}

export default Item