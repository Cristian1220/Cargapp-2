// Dependecies

import React, {Component} from 'react';

// Component-
import Contacto from '../../component/Contacto/Contacto';
import ContentContacto from '../../component/ContentContacto/ContentContacto';

import './ContaC.css'; 


class ContaC extends Component {          
  render() { 
    return (
      <div className='App'>
          <Contacto />
          <ContentContacto />
      </div>
    );
  }
}

export default ContaC;