import React, { useEffect, useState } from "react";
import{Routes,Route}from"react-router-dom";
import Layout from"./components/Layout";
import Home from"./pages/Home";
import Products from"./pages/Products";
import{defaultProducts}from"./data";
const KEY="mini-product-store-products";
function App(){const[products,setProducts]=useState(()=>{const saved=localStorage.getItem(KEY);
if(saved){try{return JSON.parse(saved)}catch{return defaultProducts}}return defaultProducts});
useEffect(()=>localStorage.setItem(KEY,JSON.stringify(products)),[products]);const addProduct=p=>setProducts(list=>[...list,{...p,id:Date.now()}]);
const deleteProduct=id=>setProducts(list=>list.filter(p=>p.id!==id));return <Routes>
<Route element={<Layout/>}>
<Route path="/" element={<Home productCount={products.length}/>}/>
<Route path="/products" element={<Products products={products} onAddProduct={addProduct} onDeleteProduct={deleteProduct}/>} />
</Route></Routes>}export default App;