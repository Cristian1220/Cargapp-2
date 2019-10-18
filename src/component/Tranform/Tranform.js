import React, { Component } from 'react';

import './Tranform.css';

class Tranform extends Component{
    render()  {
        return (
           
            
         <form className="formula">
         <h1 className="titulotrn">Gana más dinero con Cargapp.</h1>
             <div className="formulario3">  
             <label className="tex"></label>

            <div className="uno">       
                <input className="for1"
                type="text" 
                ame="username" 
                placeholder="Nombre Completo"
                /> 
                
                <input className="for2"
                type="text" 
                name="username" 
                placeholder="Teléfono "
                />
            </div> 
            <div className="dos">
                <label className="text"></label>         
                <input  className="for2"
                type="text"  
                name="username" 
                placeholder="Correo"
                />
                  
                <input  className="for1"
                type="text" 
                name="username" 
                placeholder="Nit"
                />
             </div>          
            </div>
            <div className="button">
               <div className="button1" onClick="">
                   <p className="botton">ENVIO</p>
               </div>
            </div>  
         </form>
     
        );  
    }

}


export default Tranform;