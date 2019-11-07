import React, { Component } from 'react';
import logo from '../../logos/logo.ico';

import './Footer.css';

class Footer extends Component{
    render()  {
        return (
          <div className="footer">
            <div className="footer2">
                <div className="footer3">
                    <div className="parte1">
                      <img className="imgF" src={logo} href=""/>
                      <p className="CajaTexto0">Direccion CR 13A #89-13</p>
                      <p className="CajaTexto0">Atendemos de 8:00am a 17:00pm</p>
                      <h2 className="CajaTitulo1">Teléfono 459 1457</h2>
                    </div>
                    <div className="parte2">
                      <h2 className="CajaTitulo">Redes sociales</h2>
                       <div className="redes">
                           <div className="red"></div>
                           <div className="red"></div>
                           <div className="red"></div>
                       </div>
                    </div>
                </div>
              <div className="cuadro">
                  <div className="text">
                    <h3 className="CajaTitulo">CARGAPP</h3>
                    <p className="CajaTexto0">Conductores</p>
                    <p className="CajaTexto0">Transportadores</p>
                    <p className="CajaTexto0">Nuestros clientes</p>
                  </div>
                  <div className="text">
                    <h3 className="CajaTitulo">SOBRE NOSOTROS</h3>
                    <p className="CajaTexto0">Política de privacidad</p>
                    <p className="CajaTexto0">Términos de uso del cliente</p>
                    <p className="CajaTexto0">Condiciones de uso de los conductores</p>
                  </div>
              </div>

            </div> 
            <div className="footer2">
            <div id="enlace-Inicio" className="linea">    
                  &copy; <p className="derechos"> © 2019 Cargapp. Todos los derechos reservados.</p>
              </div>
              </div>   
          </div>
        );  
    }
}


export default Footer;