import React, { useEffect, useState } from "react";
import{Outlet}from"react-router-dom";
import Navbar from"./Navbar";
import Footer from"./Footer";
function Layout(){const[show,setShow]=useState(false);useEffect(()=>{const key="mini-product-store-welcome-shown";if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,"true");setShow(true);const timer=setTimeout(()=>setShow(false),3500);return()=>clearTimeout(timer)},[]);return <><Navbar/>{show&&<div className="welcome-message">👋 Welcome to our Mini Product Store!</div>}<main><Outlet/></main><Footer/></>}export default Layout;