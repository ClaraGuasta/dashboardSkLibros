import React from 'react';
import {  Route, Link, Routes } from "react-router-dom";
import logo from "../assets/img/logo.png"
import avatar from "../assets/img/misery.jpg"
import Section1 from "./Section1"
import LastProduct from "./LastProduct"
import Categorys from "./Categorys"
import ListaProductos from "./ListaProductos"


function Header() {
    return(
      <React.Fragment>
        <header>
    <div id="sidebar">
          <ul>
            <li>
             <img src={logo} alt="" className="logo" />
            </li>
           <Link to="/Section1"><li>Cantidades</li></Link>
           <Link to="/LastProduct"><li>Ultimo producto</li></Link>
           <Link to="/Categorys"><li>Totales por género</li></Link>
           <Link to="/ListaProductos"><li>Productos</li></Link>
          </ul> 
        </div>

        <div className="top-bar">
          <div className="derecha">
            <i className="fas fa-envelope"></i>
            <i className="fas fa-bell"></i>
          </div>
          <p className="header-usuarioNombre">Juan Gonzales</p>
          <img alt=" " src={avatar} /> 
        </div>
    </header>
  
     <Routes>
     <Route path="/Section1" element={<Section1/>}></Route>
     <Route path="/LastProduct" element={<LastProduct/>}></Route>
     <Route path="/Categorys" element={<Categorys />}></Route>
     <Route path="/ListaProductos" element={<ListaProductos/> }></Route>
   </Routes>
   </React.Fragment>
    )
    
}
export default Header;