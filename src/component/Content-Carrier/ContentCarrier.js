import React, { Component } from 'react';
import cargapplite from '../../logos/cargapplite.png';
import negocio from '../../logos/negocio.png';
import './ContentCarrier.css';

class ContentCarrier extends Component{
    render()  {
        return (
        <div className="content1">
             <div className="ser1">     
                 <img className="imgA" src={cargapplite} href=""/>
              
                <div className="texto ">  
                    <h1 className="titulo2">SER UN PORTADOR SOCIO</h1>

                     <p>Bienvenido al mercado de operadores más grande.
                     Regístrese y acceda a las cargas publicadas por los mejores cargadores del país,
                     además de capital de trabajo, tecnología de punta para su proveedor y más.
                     </p>
                </div> 
            </div>   
                <div>
                <h1 className="titulo2">VENTAJAS</h1>
                </div>
            <div className="advantages">    
                <div className="servicios1">
                    
                    <img className="imgA1"  src={negocio} href=""/> 
                    <div className="titulo">
                    <h2>NEGOCIAR</h2>
                    <h3>POR LA PLATAFORMA</h3>
                    </div>
                    <div className="texto">                    
                    <p>Encuentre un envío y envíe su propuesta de valor a través de Cargapp, nuestra plataforma. Negociar la demanda en un solo lugar.</p>
                    </div>
                </div>
                <div className="servicios1">
                    
                    <img className="imgA1"  src={negocio} href=""/> 
                    <div className="titulo">
                    <h2>NEGOCIAR</h2>
                    <h3>POR LA PLATAFORMA</h3>
                    </div>
                    <div className="texto">                    
                    <p>Encuentre un envío y envíe su propuesta de valor a través de Cargapp, nuestra plataforma. Negociar la demanda en un solo lugar.</p>
                    </div>
                </div>
                <div className="servicios1">
                    
                    <img className="imgA1"  src={negocio} href=""/> 
                    <div className="titulo">
                    <h2>NEGOCIAR</h2>
                    <h3>POR LA PLATAFORMA</h3>
                    </div>
                    <div className="texto">                    
                    <p>Encuentre un envío y envíe su propuesta de valor a través de Cargapp, nuestra plataforma. Negociar la demanda en un solo lugar.</p>
                    </div>
                </div>
                <div className="servicios1">
                    
                    <img className="imgA1"  src={negocio} href=""/> 
                    <div className="titulo">
                    <h2>NEGOCIAR</h2>
                    <h3>POR LA PLATAFORMA</h3>
                    </div>
                    <div className="texto">                    
                    <p>Encuentre un envío y envíe su propuesta de valor a través de Cargapp, nuestra plataforma. Negociar la demanda en un solo lugar.</p>
                    </div>
                </div>
            </div>
             
           
       </div>
        );  
    }
}

export default ContentCarrier;