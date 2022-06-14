import {useState} from 'react';
import "../ItemListContainer/ItemListContainer.css"

export default function ItemCount({initial,stock}){

    const[count,setCount]=useState(initial);

    const add = () => {
        if (count < stock){
            setCount(parseInt(count) + 1)
        }
    };

    const takeOff = () => {
        if (count > initial){
            setCount(parseInt(count) - 1)
        }
    };

    return(
        <div>
            <button className="pzCarro" onClick={takeOff}>-</button>
            <span>{count}</span>
            <button className="pzCarro" onClick={add}>+</button>
            <br/>
            <button>Agregar</button>
        </div>
    )
}

