import React, { Component } from 'react';

import './Contentload.css';

class Contentload extends Component{
    render()  {
        return (
    <div className="card1">
        <div className="ContainerPrincipal"> 
                <h1 className="TituloPrincipal">NUESTROS NÚMEROS</h1> 
        <div className="ContainerSegundo">    
            <div className="cajas2">   
                <p className="camionero">Plataforma con</p>
                <h1 className="SubTitulo">250,000</h1>
                <p className="camionero">Camioneros registrados</p>
            </div>
            <div className="cajas2">    
                <p className="camionero">Plataforma con</p>
                <h1 className="SubTitulo">250,000</h1>
                <p className="camionero">Camioneros registrados</p>
            </div>
            <div className="cajas2">    
                <p className="camionero">Plataforma con</p>
                <h1 className="SubTitulo">250,000</h1>
                <p className="camionero">Camioneros registrados</p>
            </div>
            <div className="cajas2">    
                <p className="camionero">Plataforma con</p>
                <h1 className="SubTitulo">250,000</h1>
                <p className="camionero">Camioneros registrados</p>
            </div>
        </div>    
                     
        <div className="ContainerTres"> 
        <h1 className="TituloPrincipal">LAS VENTAJAS QUE VAS A TENER</h1> 
            <div className="servicios3">
                <div className="titulo3">
                    <h2 className="TextoPincial">PEQUEÑO</h2>
                    <h3 className="TextoSegundario">LAS EMPRESAS</h3>
                </div> 
                <div className="texto1">                    
                    <p>Ahorre en estructura y aproveche nuestra tecnología para obtener cargas y mantenerse al día con su flota. Si necesita inversión para sus operaciones, tenemos condiciones especiales.</p>
                </div> 
            </div> 
            <div className="servicios3">
                <div className="titulo3">
                    <h2 className="TextoPincial">PROMEDIOS</h2>
                    <h3 className="TextoSegundario">LAS EMPRESAS</h3>
                </div> 
                <div className="texto1">                    
                    <p>Ahorre en estructura y aproveche nuestra tecnología para obtener cargas y mantenerse al día con su flota. Si necesita inversión para sus operaciones, tenemos condiciones especiales.</p>
                </div> 
            </div>  
            <div className="servicios3">
                <div className="titulo3">
                    <h2 className="TextoPincial">GENIAL</h2>
                    <h3 className="TextoSegundario">LAS EMPRESAS</h3>
                </div>   
                <div className="texto1">                    
                    <p>Ahorre en estructura y aproveche nuestra tecnología para obtener cargas y mantenerse al día con su flota. Si necesita inversión para sus operaciones, tenemos condiciones especiales.</p>
                </div> 
            </div>    
        </div>
        </div>       
    </div>    
        );
    }
}

export default Contentload;