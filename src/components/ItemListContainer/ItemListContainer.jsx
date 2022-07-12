import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../../services/firestore";

const ItemListContainer = ({saludo}) =>{
  const [productos, setProductos] = useState ([]);

  useEffect(() =>{
      getItems()
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

/* 
 */