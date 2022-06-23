import React, {useState, useEffect} from "react";

import ItemList from "../ItemList/ItemList";
import {products} from "../mock/products";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) =>{
  const [productos, setProductos] = useState ([]);
  const {categoryId} = useParams();

  useEffect(() =>{
    const pullProducts = new Promise ((resolve,reject) =>{
      setTimeout(() => {
        if(categoryId === undefined)
        resolve(products);
        else{
            const itemsFound = products.filter(plant =>{
              return plant.category === categoryId;
            })
            resolve(itemsFound);
        }
      }, 2000);
      });
      pullProducts
      .then((resolve)=>{
        setProductos(resolve);
      })
      .catch((error) =>{
        console.log(error);
      })
    }, [categoryId]);
   /*  console.log(productos); */

  return( 
    <>
      <div>{saludo}</div>
      <ItemList items={productos}/>
   </>
  );
}; 

export default ItemListContainer;