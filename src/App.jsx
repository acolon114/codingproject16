import { useState } from 'react';
import './App.css'
import  ProductList  from '../components.jsx/ProductList.jsx';
import  AddProductForm  from '../components.jsx/AddProductForm.jsx';


function App() {
  
// List of products
const [products, setProducts] = useState([
  { id: 1, name: "Pizza", price: 20, description: "XL Pepperoni Pizza Pie" },
  { id: 2, name: "Soda", price: 2.50, description: "2L of Coke" },
  { id: 3, name: "Paper Plates", price: 5, description: "50 Paper Plates" }
]);

  //Task 7: Pass Data Between Components
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

