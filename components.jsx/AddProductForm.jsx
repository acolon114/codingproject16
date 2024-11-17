//Task 6: Create the AddProductForm Component

import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Handles the Form for Submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

  // Ensure That All Fields are Filled in Before Submitting
    if (!name || !price || !description) {
      alert("Complete All Inputs");
      return;
      }

    // Adds new products
    onAddProduct({ name, price: parseFloat(price), description });

    setName("");
    setPrice("");
    setDescription("");
  };

//Creates Form For User to Input New Product Information
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
