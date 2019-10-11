import React, { Component } from 'react';
import empresa2  from '../../logos/empresa2.png'
import './Contentload.css';

class Contentload extends Component{
    render()  {
        return (
    <div className="card1"> 
            {/*  <h1>VENTAJAS</h1>    */}       
        <div className="caja3"> 
            <div className="imgE">
               <img className="img4" src={empresa2} href=""/>  
            </div>   
            <div className="servicios3">
                <div className="titulo3">
                    <h2>PEQUEÑA</h2>
                    <h3>EMPRESAS</h3>
                </div>   
                <div className="texto1">                    
                    <p>Ahorre en estructura y aproveche nuestra tecnología para obtener cargas y mantenerse al día con su flota. Si necesita inversión para sus operaciones, tenemos condiciones especiales.</p>
                </div>
            </div>   
          </div>
    </div>    
        );
    }
}

export default Contentload;