import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import {products} from "../mock/products";

const ItemListContainer = ({saludo}) =>{
  const [productos, setProductos] = useState ([]);

  useEffect(() =>{
    const pullProducts = new Promise ((resolve,reject) =>{
      setTimeout(() => {
        resolve(products);
      }, 2000);
      });

      pullProducts
      .then((resolve)=>{
        setProductos(resolve);
      })
      .catch((error) =>{
        console.log(error);
      })
    }, []);
   /*  console.log(productos); */

  return( 
    <>
      <div>{saludo}</div>
      <ItemList items={productos}/>
   </>
  );
}; 

export default ItemListContainer;