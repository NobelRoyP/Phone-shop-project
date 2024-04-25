import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import './Addform.css'

const Addform = () => {

const navigate = useNavigate();

const [proid, setId] = useState('');
const [brand, setBrand] = useState('');
const [pname, setPname] = useState('');
const [category, setCategory]= useState('');
const [stockqty, setStockqty] = useState('');
const [price, setPrice] = useState('');

const handleIdChange = (event) => {
    setId(event.target.value);
};
const handleBrandChange = (event) => {
    setBrand(event.target.value);
};
const handlePnameChange = (event) => {
    setPname(event.target.value);
};
const handleCategoryChange = (event) => {
    setCategory(event.target.value);
};
const handleStockqtyChange = (event) => {
    setStockqty(event.target.value);
};
const handlePriceChange = (event) => {
    setPrice(event.target.value);
};

    async function addToDb() {
     await addDoc(collection(db, "products"), {
      proid: proid, 
      brand: brand,
      name: pname,
      Date: serverTimestamp(),
      category: category,
      stockqty: stockqty,
      price: price, 
    });
    setId('');
    setBrand('');
    setPname('');
    setCategory('');
    setStockqty('');
    setPrice('');
}
const handleSubmit = (event) => {
          event.preventDefault();
    addToDb();
    navigate('/');    
  };
return(
 <>
 <div className="container">
 <form onSubmit={handleSubmit}>
     <h2>Add Products</h2>
     <input type="text" name="proid" value={proid} onChange={handleIdChange} placeholder="Enter Id: A1 to A9 then B1 to B9 etc. " required className="input"/><br/>
          <input type="text" name="brand" value={brand} onChange={handleBrandChange} placeholder="Enter Brand" required/><br/>
          <input type="text" name="name" value={pname} onChange={handlePnameChange} placeholder="Enter Name" required/><br/>
          <input type="text" name="category" value={category} onChange={handleCategoryChange} placeholder="Enter Category" required /><br/>
          <input type="text" name="stockqty" value={stockqty} onChange={handleStockqtyChange} placeholder="Enter Stock quantity" required /><br/>
          <input type="text" name="price" value={price} onChange={handlePriceChange} placeholder="Enter Price" required /><br/>
          
  <button type="submit">Submit</button>
  <Link to="/" className="tlink"><i class="fa-solid fa-right-long"></i></Link>
  </form>
 </div>
  
 </>
 );
}
export default Addform;
