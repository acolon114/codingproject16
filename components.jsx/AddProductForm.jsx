//Task 6: Create the AddProductForm Component

import React, { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Handles the form for submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Adds new products
    addProduct({ name, price: parseFloat(price), description });

    setName("");
    setPrice("");
    setDescription("");
  };

//Creates Form for user to input new product information
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
            required /*This makes it so that there has to be an input, otherwise it will not complete request*/
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product price"
            required /*This makes it so that there has to be an input, otherwise it will not complete request*/
          />
        </label>
      </div>
      <div>
        <label>
          Product Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description"
            required /*This makes it so that there has to be an input, otherwise it will not complete request*/
          />
        </label>
      </div>
      <button type="submit">Add New Product</button>
    </form>
  );
};

export default AddProductForm;
