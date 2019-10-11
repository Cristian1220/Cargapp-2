import React, { Component } from 'react';

import './FormDriver.css';

class FormDriver extends Component{
    render()  {
        return (
      <div>  
            
         <form className="formula1">
             <h1 className="titulotrn">Gana más dinero con Cargapp</h1>
         <div className="formulario3">     
               <div className="uno"> 
                   <input className="for1"
                   type="text" 
                   ame="username" 
                   placeholder="Nombre completo"
                   /> 
                   <input className="for2"
                   type="text" 
                   name="username" 
                   placeholder="Telefono"
                   />
               </div> 
               <div className="dos">
                   <label className="text">Origen</label>         
                   <input  className="for1"
                   type="text"  
                   name="username" 
                   placeholder="Despartamento"
                   />
                   <input  className="for2"
                   type="text" 
                   name="username" 
                   placeholder="Ciudad"
                   />
                </div>
                <div className="uno"> 
                   <label className="text">destino</label>       
                   <input className="for1"
                   type="text" 
                   ame="username" 
                   placeholder="Departamento"
                   /> 
                   
                   <input className="for2"
                   type="text" 
                   name="username" 
                   placeholder="Ciudad"
                   />
                </div>

                <div className="dos">
                    <input className="for1"
                    type="text" 
                    name="username" 
                    placeholder="Cual categoria es tu vehiculo"
                    /> 
                   
                   <input className="for2"
                   type="text" 
                   name="username" 
                   placeholder="Tipo de furgon"
                   />
                   <div className="dos">
                    <input className="for1"
                    type="text" 
                    name="username" 
                    placeholder="Tipo de camion"
                    /> 
                   
                   <input className="for2"
                   type="text" 
                   name="username" 
                   placeholder="Años de experiencia"
                   />
                   </div>
                 </div> 
                         
            </div>
              
               <div className="button">
                  <div className="button1" onClick="">
                      <p className="botton">ENVIO</p>
                  </div>
               </div>  
               
            </form>
        
        </div>
        );  
    }
   
}


export default FormDriver;