import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer(props) {

  return (
  <div>
   <h1>{props.greet}</h1>
   <ItemCount stock="5" initial="1"/>
   </div>
  );
  
}

