import React, { Component } from 'react';

import './ContentContacto.css';

class ContentContacto extends Component {
    render() { 
        return (
            <div className="CardContacto">
                <div className="CoctatoRedes"> 
                        <h1 className="TituloContacto">Canal de comunicacion</h1>
                        <p>Con cargapp</p>
                        <h2>Teléfono 459 1457</h2>
                        <p>contato@cargapp.co</p>
                        <p>Horario de atención de 8 a.m. a 5 p.m.</p>
                        <p> De lunes a viernes.</p>
                   <div className="Redes">
                      <h2>Redes sociales</h2>
                       <div className="IconosRedes">
                           <div className="RedIcono"></div>
                           <div className="RedIcono"></div>
                           <div className="RedIcono"></div>
                       </div>
                    </div>
                </div>
                        <div id="enlace-Inicio" className="lineaContacto"></div>
                <div className="FormularioContacto">
                              <h1 className="TituloContacto">Formulario</h1>
                    <textarea className="Forma1"
                    name="username" 
                    placeholder="Nombre"
                    /> 
                
                    <textarea  className="Forma1"
                    name="username" 
                    placeholder="Correo"
                    />

                    <textarea  className="Forma1" 
                    name="username" 
                    placeholder="Telefono"
                    /> 
                   
                   <textarea  className="Forma2" 
                   name="username" 
                   placeholder="Mensaje"
                   />      
               </div>
             {/*   <div className="button">
                  <div className="button1" onClick="">
                      <p className="botton">ENVIO</p>
                  </div>
               </div>  */} 
             </div>
             
         );
    }
}
 
export default ContentContacto;


                         
           
              
              