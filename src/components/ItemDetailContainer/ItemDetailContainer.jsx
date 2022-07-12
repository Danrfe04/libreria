import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItemCategory } from "../../services/firestore";

const ItemDetailContainer = ({saludo}) => {
    const [prodDetail,setProdDetail] = useState ({});
    const {categoryId} = useParams();
    useEffect (() =>{
        if (categoryId){
            getItemCategory(categoryId)
            .then((resolve)=>{
              setProdDetail(resolve);
            })
            .catch((error)=>{
              console.log(error);
            });
          } else {
            getItemCategory(categoryId)
            .then((resolve) =>{
                setProdDetail(resolve);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        }, [categoryId]);
    return(
        <>
            <div>{saludo}</div>
            <ItemDetail prod={prodDetail}/>
        </>
    );
};

export default ItemDetailContainer