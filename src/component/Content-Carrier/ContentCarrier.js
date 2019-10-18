import React, { Component } from 'react';
import generadorM from '../../logos/generadorM.jpeg';
import negocio from '../../logos/negocio.jpeg';
import capital from '../../logos/capital.png';
import dinero from '../../logos/dinero.png';
import celular from '../../logos/celular.png';
import './ContentCarrier.css';

class ContentCarrier extends Component{
    render()  {
        return (
        <div className="content1">
             <div className="ser1">     
                 <img className="IMG" src={generadorM} href=""/>
                 <div className="texto ">
                     <h1 className="titulo8">SER UN PORTADOR SOCIO</h1>           
                     <p>Bienvenido al mercado de operadores más grande.
                     Regístrese y acceda a las cargas publicadas por los mejores cargadores del país,
                     además de capital de trabajo, tecnología de punta para su proveedor y más.
                     </p>
                </div> 
            </div>   
                <div>
                <h1 className="titulo11">LAS VENTAJAS QUE TIENE</h1>
                </div>
            <div className="cajaGenerador">    
                <div className="serGenerador">   
                    <img className="IMG1"  src={negocio} href=""/> 
                    <div className="titulo">
                        <h1 className="tituloGen">NEGOCIAR</h1>
                        <h3>POR LA PLATAFORMA</h3>
                    </div>
                    <div className="texto">                    
                        <p>Encuentre un envío y envíe su propuesta de valor a través de Cargapp, nuestra plataforma. Negociar la demanda en un solo lugar.</p>
                    </div>
                </div>
                <div className="serGenerador"> 
                    <img className="IMG1"  src={capital} href=""/> 
                    <div className="titulo">
                         <h1 className="tituloGen">FORTALECER</h1>
                         <h3>TU RELACIÓN CON MÁS GENERADORES</h3>
                    </div>
                    <div className="texto">                    
                         <p>Cree una rutina de carga y reduzca la inactividad de su flota. Reciba notificaciones exclusivas de sus cargadores favoritos para avanzar en la aceptación de las demandas.</p>
                    </div>
                </div>
                <div className="serGenerador">     
                    <img className="IMG1"  src={dinero} href=""/> 
                   <div className="titulo">
                        <h1 className="tituloGen">CAPITAL</h1>
                        <h3>ROTANDO</h3>
                    </div>
                    <div className="texto">                    
                         <p>Ofrecemos capital de trabajo para expandir sus operaciones, aumentar los ingresos de su operador y crear más empleos.</p>
                    </div>
                </div>
                <div className="serGenerador">   
                    <img className="IMG1"  src={celular} href=""/> 
                    <div className="titulo">
                        <h1 className="tituloGen">TECNOLOGIA</h1>
                        <h3>MUCHO MAS FACIL</h3>
                    </div>
                    <div className="texto">                    
                        <p>Confiamos en la tecnología de big data y aprendizaje automático para ofrecer pasos de recolección más eficientes y nuevas oportunidades de carga..</p>
                    </div>
                </div>
            </div>
             
           
       </div>
        );  
    }
}

export default ContentCarrier;