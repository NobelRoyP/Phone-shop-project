import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Addform from './components/Addform'
import ProductTable from './components/Product_table'
import Login from './components/Login'

const Home = () => {

return(
 <>
 <BrowserRouter> 
       <Routes> 
             <Route path="/add" element={<Addform/>} /> 
             <Route path="/" element={<ProductTable/>} /> 
              <Route path="/login" element={<Login/>} /> 
       </Routes> 
</BrowserRouter>
 
 <Header/>
 </>
 );
}
export default Home;
