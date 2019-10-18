// Dependecies

import React, {Component} from 'react';

// Component-
import VistaN from '../../component/Nosotros/VistaN';
import ConN from '../../component/ConN/ConN';
import CardCamionero from '../../component/CardCamionero/CardCamionero';
import './Sobre.css';


class SobreNosottros extends Component {          
  render() { 
    return (
      <div className='App'>
        <VistaN/>
        <ConN/>
        <CardCamionero/>
        <CardCamionero/>
        <CardCamionero/>
      </div>
    );
  }
}

export default SobreNosottros;