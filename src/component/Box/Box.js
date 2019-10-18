import React, { Component } from 'react';
import Screenshot from '../../logos/Screenshot.png';
import cargapplite from '../../logos/cargapplite.png'; 
import cargapp from '../../logos/cargapp.png'; 
import './Box.css';

class Box extends Component{
    render()  {
        return (
            <div className="caja">
                 <div className="paragraph">
                <div className="titulo">                 
                    <h2 className="TituloCamionero">Conectamos sus necesidades con sus intereses.</h2>
                </div>
                <div className="titulo">              
                     <h3 className="TituloSub">Sé parte de Cargapp.</h3>
                </div>
  
                 </div>
                 <div className="caja-img">
                    <div className="Box">
                        <img className="imgA" src={cargapplite} href=""/>
                         <div className="textos2">
                             <p>Informe quando está pronto para carregar em um toque e receba todas as informações do frete.</p>
                        </div>
                    </div>
                    <div className="Box">
                        <img className="imgA" src={cargapp} href=""/>
                        <div className="textos2">
                             <p>Informe quando está pronto para carregar em um toque e receba todas as informações do frete.</p>
                        </div>
                    </div>
                    <div className="Box">
                        <img className="imgA" src={Screenshot} href=""/>
                        <div className="textos2">
                             <p>Informe quando está pronto para carregar em um toque e receba todas as informações do frete.</p>
                        </div>
                     </div>
        
              </div>
            </div>
        );
    }
}


export default Box;