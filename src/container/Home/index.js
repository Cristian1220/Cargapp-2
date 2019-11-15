// Dependecies

import React, {Component} from 'react';

// Component-
import Content from '../../component/Content/Content';
import CardImage from '../../component/Cardlmage/CardImage';
import {images} from '../../logos';
import './Home.css';


class Home extends Component {          
  render() { 
    return (
      <div className='App'>
        
         <Content />
         <div className="container-img">
          <CardImage empresa={images.Empresa} nombreEmpresa='Empresa' EmpreMini={images.EmpresaMini} NombreMini='Empresa'  url="/Company"/>
          <CardImage empresa={images.Camionero} nombreEmpresa='Camionero' EmpreMini={images.CamioneroMini} NombreMini='Camionero' url="/Camionero"/>
          <CardImage empresa={images.Transportador} nombreEmpresa='Transportador' EmpreMini={images.TransportadorMini} NombreMini='Transportador' url="/Carrier" />
         </div>       
      </div>
    );
}
}

export default Home;