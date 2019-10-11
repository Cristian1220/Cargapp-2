import React, { Component } from 'react';

import './ContentContacto.css';

class ContentContacto extends Component {
    render() { 
        return (
            <div className="Contacto1">
                     <h2 className="titu">NUESTROS NÚMEROS</h2>
                <div className="portadaC"> 
                    <div className="porC">                   
                        <h3>Plataforma con</h3>
                        <h4>1.500</h4>
                        <p>camioneros registrados</p>
                    </div>
                    <div className="porC">                   
                        <h3>Tenemos más de</h3>
                        <h4>350</h4>
                        <p>colabores</p>
                    </div>
                    <div className="porC">                   
                        <h3>Cantidad de</h3>
                        <h4>750 KMs</h4>
                        
                    </div>
                    <div className="porC">                   
                        <h3>Plataforma con</h3>
                        <h4>250.000</h4>
                        <p>camioneros registrados</p>
                    </div>
                     
                </div>
             </div>
             
         );
    }
}
 
export default ContentContacto;