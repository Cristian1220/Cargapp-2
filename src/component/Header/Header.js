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
                        <a href="/">
                        <img className="LogoCargapp" src={logo}/>
                        </a> 
                   </div>
                      <div className="enlace">
                            <a href="/" id="enlace-Inicio" className="btn-header">Inicio</a>
                            <a href="/SobreNosotros" id="enlace-Sobres nostro" className="btn-header">Sobres nostros</a>
                            <a href="/ContaC" id="enlace-Contacto" className="btn-header">Contacto</a>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;