import React from 'react';
import logo from "../assets/img/logo.png"
import avatar from "../assets/img/misery.jpg"


function Header() {
    return(
        <header>
    <div id="sidebar">
          <ul>
            <li>
              <img src={logo} alt="" className="logo" />
            </li>
            <li>Cantidades</li>
            <li>Ultimo producto</li>
            <li>Totales por género</li>
            <li>Productos</li>
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
    )
    
}
export default Header;