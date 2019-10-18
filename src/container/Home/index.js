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
          <CardImage empresa={images.empresa} nombreEmpresa='Generador de carga' url="/Company"/>
          <CardImage empresa={images.foto} nombreEmpresa='Camionero' url="/Camionero"/>
          <CardImage empresa={images.equipo} nombreEmpresa='Transportador' url="/Carrier" />
         </div>
        
      </div>
    );
}
}

export default Home;