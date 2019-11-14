import React, { Component } from 'react';
import logo from '../../logos/logo.ico';
import {images} from '../../logos';

import './Footer.css';

class Footer extends Component{
    render()  {
      const { IconoRedes01,IconoRedes02,IconoRedes03,IconoRedes04, url } = this.props;
        return (
          <div className="footer">
            <div className="footer2">
                <div className="footer3">
                    <div className="parte1">
                      <img className="imgF" src={logo} /> 
                      <p className="CajaTexto0"><b>Dirección:</b> Bogotá Carrera 13A # 89-13 Oficina 306</p>
                      <p className="CajaTexto0"><b>Teléfono:</b> (1) 404 41 59 - 314 278 78 82</p>
                      <p className="CajaTexto0"><b>Email:</b> info@cargapp.co</p>
                    </div>
                    <div className="parte2">
                       <div className="redes">
                          <a href={images.IconoRedes01}> <div className="red"> <img src={images.IconoRedes01}></img> </div> </a>
                          <a href={images.IconoRedes02}>  <div className="red"> <img src={images.IconoRedes02}></img></div> </a>
                          <a href={images.IconoRedes03}> <div className="red"> <img src={images.IconoRedes03}></img></div> </a>
                          <a href={images.IconoRedes04}> <div className="red"> <img src={images.IconoRedes04}></img></div> </a>
                       </div>
                    </div>
                </div>
              <div className="cuadro">
                  <div className="text">
                    <p className="CajaTitulo3"> <b> Cargapp </b> </p>
                    <p className="CajaTexto0">Conductores</p>
                    <p className="CajaTexto0">Transportadores</p>
                    <p className="CajaTexto0">Nuestros clientes</p>
                  </div>
                  <div className="text">
                    <p className="CajaTitulo"> <b> Sobre nosotros </b> </p>
                    <p className="CajaTexto0">Política de privacidad</p>
                    <p className="CajaTexto0">Términos de uso del cliente</p>
                    <p className="CajaTexto0">Condiciones de uso de los conductores</p>
                  </div>
              </div>

            </div> 
            <div className="footer2">
            <div id="enlace-Inicio" className="linea">    
                  <p className="derechos"> © 2019 Cargapp. Todos los derechos reservados.</p>
              </div>
              </div>   
          </div>
        );  
    }
}


export default Footer;