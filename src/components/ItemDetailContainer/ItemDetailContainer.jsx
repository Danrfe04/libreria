import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../mock/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({saludo}) => {
    const [prodDetail,setProdDetail] = useState ({});
    const {itemId} = useParams();
    useEffect (() =>{
        const bringProduct = new Promise ((resolve,reject) =>{

            setTimeout(() => {
                let itemNumber = parseInt(itemId)
                const itemFound = products.find(detalle =>{
                    return detalle.id === itemNumber
                })
                resolve(itemFound);
              }, 2000);
              });

            bringProduct
            .then((resolve) =>{
                setProdDetail(resolve);
            })
            .catch((error)=>{
                console.log(error);
            })
        }, [itemId]);
    return(
        <>
            <div>{saludo}</div>
            <ItemDetail prod={prodDetail}/>
        </>
    );
};

export default ItemDetailContainer