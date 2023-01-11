import "./App.css";
import Products from "./components/Products";
import ProductData from "./Database/ProductTable.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Giras Shop</h1>
        <Products products={ProductData} />
      </header>
    </div>
  );
}

export default App;
