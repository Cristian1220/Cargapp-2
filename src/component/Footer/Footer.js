import React, { Component } from 'react';
/* import logo from '../../logos/logo'; */
import './Footer.css';

class Footer extends Component{
    render()  {
        return (
          <div className="footer">
              <div className="cuadro">
                  <div className="text">
                    <h3>CARGAPP</h3>
                    <p>Conductores</p>
                    <p>Transportadores</p>
                    <p>Nuestros clientes</p>
                  </div>
                  <div className="text">
                    <h3>SOBRE NOSOTROS</h3>
                    <p>Vacante</p>
                    <p>Política de privacidad</p>
                    <p>Términos de uso del cliente</p>
                    <p>Condiciones de uso de los conductores</p>
                  </div>
                  <div className="text">
                      <h3>NUESTRO CLIENTES</h3>
                      <p>Conductores</p>
                      <p>Transportadores</p>
                      <p>Nuestros clientes</p>
                  </div>
                </div>
                <div id="enlace-Inicio" className="linea" />
            </div>
        );  
    }
}


export default Footer;