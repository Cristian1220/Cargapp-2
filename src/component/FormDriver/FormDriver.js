import React, { Component } from 'react';

import './FormDriver.css';

class FormDriver extends Component{
    render()  {
        return (
      <div>    
         <form className="FormularioCamionero">
             <h1 className="TituloCamionero">Gana más dinero con Cargapp</h1>
            <div className="FomularioCamionero2">     
                    <div className="FormCamioneroUno"> 
                        <input className="FormUno"
                            type="text" 
                            name="username" 
                            placeholder="Nombre completo"
                        /> 
                        <input className="FormDos"
                            type="text" 
                            name="username" 
                            placeholder="Telefono"
                        />
                    </div> 
                    <div className="FormularioSeleccion">
                        <div className="Disponible">
                            <label className="TextoSeleccion">Disponible viajes para esta semana:</label>
                        </div> 
                        <div className0="Seleccion">
                            <label className="SeleccionSi">
                            <input className="FormSeleccion" 
                                type="radio"
                                valiue="Si"
                                checked={true}
                             />
                            Si
                            </label> 
                        </div> 
                    </div>
                    <div><label className="Ruta">Ruta preferidad</label></div>
                    <div><label className="Origen">Origen</label> </div>
                    <div className="FormCamioneroDos">
                               
                        <input  className="FormUno"
                            type="text"  
                            name="username" 
                            placeholder="Despartamento"
                        />
                        <input  className="FormDos"
                            type="text" 
                            name="username" 
                            placeholder="Ciudad"
                        />
                    </div>
                   {/*  <div className="uno"> 
                        <label className="text">destino</label>       
                        <input className="for1"
                            type="text" 
                            name="username" 
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
                    </div>   
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
                </div>       */}    
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