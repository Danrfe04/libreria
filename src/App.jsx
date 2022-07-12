import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/nav/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ContactPage from "./pages/Contact";
import CartWidget from "./components/nav/CartWidget";
import {CartProvider } from "./context/CartContext";


function App() {

  return (
    <div className="App">
      <CartProvider >
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer  greet="El listado de items va aquí"/>}/>
          <Route path="/detalle/:itemId" element={<ItemDetailContainer saludo="Detalle de producto"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer saludo="Categoría de producto"/>}/>
          <Route path="/detalle/contact" element={<ContactPage/>}/>
          <Route path="/cart" element = {<CartWidget/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
