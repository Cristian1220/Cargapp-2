import React, { Component} from 'react';
import logo from  '../../logos/logo.ico';
import './Header.css';
import './main.css';



class Header extends Component {
    render() { 
        return (
           
            <header> 
                <nav id="nav" className="nav-1">
                   <div className="logo">
                        <img src={logo} href=""/>
                   </div>
                      <div className="enlace">
                            <a href="#" id="enlace-Inicio" className="btn-header">Inicio</a>
                            <a href="#" id="enlace-Viajes" className="btn-header">Viajes</a>
                            <a href="#" id="enlace-Clientes" className="btn-header">Clientes</a>
                            <a href="#" id="enlace-Camionero" className="btn-header">Camionero</a>
                            <a href="#" id="enlace-Sobres nostro" className="btn-header">Sobres nostros</a>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;