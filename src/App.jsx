import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/nav/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer greet="El listado de items va aquí"/>
      <ItemCount stock="5" initial="1"/>
      <ItemDetailContainer saludo="Detalle de producto"/>
    </div>
  );
}

export default App;
