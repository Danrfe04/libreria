import React from 'react';
import Item from '../Item/item';

const ItemList = ({items}) => {
  return (
    <div>
        {
            items.map(()=>{
                return(
                    <Item items={items}/>
                )
                
            })
        }
    </div>
  )
}

export default ItemList;