import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm.jsx';


function App() {
  
// List of products
const [products, setProducts] = useState([
  { id: 1, name: "Pizza", price: 20, description: "Pepperoni or Cheese" },
  { id: 2, name: "Soda", price: 2.50, description: "Coke or Pepsi" },
  { id: 3, name: "Paper Plates", price: 5, description: "Paper Plates" }
]);

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <h1>Product Management Dashboard</h1>

      <ProductList products={products} />

      <AddProductForm onAddProduct={addProduct} />
    </>
  );
}

export default App;

