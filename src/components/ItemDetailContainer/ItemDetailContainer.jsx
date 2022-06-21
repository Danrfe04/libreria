import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../mock/products";

const ItemDetailContainer = ({saludo}) => {
    const [prodDetail,setProdDetail] = useState ({});
    useEffect (() =>{
        const bringProduct = new Promise ((resolve,reject) =>{
            setTimeout(() => {
                resolve(products[1]);
              }, 2000);
              });

            bringProduct
            .then((resolve) =>{
                setProdDetail(resolve);
            })
            .catch((error)=>{
                console.log(error);
            })
        }, []);
    return(
        <>
            <div>{saludo}</div>
            <ItemDetail prod={prodDetail}/>
        </>
    );
};

export default ItemDetailContainer