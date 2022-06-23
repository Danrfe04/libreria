import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/nav/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Detalle de producto"/>}/>
          <Route path="plant/:itemId" elemnt={<ItemListContainer saludo="Categoría de Items"/>}/>
          <Route path="/category/:categoryID" elemnt={<ItemDetailContainer saludo="Detalle del producto"/>}/>
        </Routes>
      </BrowserRouter>
      <ItemCount stock="5" initial="1"/>
      <ItemDetailContainer saludo="Detalle de producto"/>
    </div>
  );
}

export default App;
