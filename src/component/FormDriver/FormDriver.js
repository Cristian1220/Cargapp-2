import React, { Component } from 'react';


import './FormDriver.css';

class FormDriver extends Component{
    render()  {
        return (
           
        <div>  
         <form className="formularios">
             
             <div className="formulario1">  
             <label className="text">Origen:</label>         
              <input 
              type="text" 
              name="username" 
              placeholder="Departamento"
              /> 
                     
              <input 
              type="text" 
              name="username" 
              placeholder="Ciudad"
              />

              <label className="text">Destino</label>         
              <input 
              type="text" 
              name="username" 
              placeholder="Departamento"
              />
                  
              <input 
              type="text" 
              name="username" 
              placeholder="Ciudad"
              />

              </div>

             <div className="formulario2">  
             <label className="text">.</label>               
             <input 
              type="text" 
              name="username"
              placeholder="Que perfil eres de camionero"
              />
                  
              <input 
              type="text" 
              name="username" 
              placeholder="Tipo de camionero"
              />
             <label className="text">{'.'}</label>  
             <input 
              type="text" 
              name="username" 
              placeholder="tipo de carroceria"
              />
                  
              <input 
              type="text" 
              name="username" 
              placeholder="Años de experiencia"
              />
              </div>
              <div className="button">
            <button type="submil">Eviar</button>
        </div>
         </form>
     
        </div>
        );  
    }

}


export default FormDriver;