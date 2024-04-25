import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import './ProductTable.css';
import EditProduct from './EditProduct'

const ProductTable = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryRef = query(collection(db, "products"), orderBy("proid", "asc"));
      const querySnapshot = await getDocs(queryRef);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };

    fetchData();
  }, []);

  const deleteRecord = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    }
  };
  
  const editRecord = () =>{
      
  }

  return (
    <>
      <div className="container1">
        <div className="ptable">
          <h1>Products</h1>
          <Link to="/add" className="link">Add</Link>
          <table>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Brand</th>
                <th>Name/Model</th>
                <th>Category</th>
                <th>Stock qty</th>
                <th>Price_per_piece</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.proid}</td>
                  <td>{product.brand}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.stockqty}</td>
                  <td>Rs.{product.price}</td>
                  <td><button className="fa-solid fa-trash" onClick={() => deleteRecord(product.id)}></button></td>
                  <td><button className="fa-solid fa-pencil" onClick={editRecord}></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default ProductTable;
