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
                      <p>Direccion CR 13A #89-13</p>
                      <p>Atendemos de 8:00am a 17:00pm</p>
                      <h2>Teléfono 459 1457</h2>
                    </div>
                    <div className="parte2">
                      <h2>Redes sociales</h2>
                       <div className="redes">
                           <div className="red"></div>
                           <div className="red"></div>
                           <div className="red"></div>
                       </div>
                    </div>
                </div>
              <div className="cuadro">
                  <div className="text">
                    <h3>CARGAPP</h3>
                    <p>Conductores</p>
                    <p>Transportadores</p>
                    <p>Nuestros clientes</p>
                  </div>
                  <div className="text">
                    <h3>SOBRE NOSOTROS</h3>
                    <p>Política de privacidad</p>
                    <p>Términos de uso del cliente</p>
                    <p>Condiciones de uso de los conductores</p>
                  </div>
              </div>

            </div> 
            <div className="footer2">
            <div id="enlace-Inicio" className="linea">
                   
                  &copy;  <p className="derechos"> © 2019 Cargapp. Todos los derechos reservados.</p>
              </div>
              </div>   
          </div>
        );  
    }
}


export default Footer;