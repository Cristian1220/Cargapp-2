// Dependecies

import React, {Component} from 'react';

// Component-
import VistaN from '../../component/Nosotros/VistaN';
import ConN from '../../component/ConN/ConN';
import './Sobre.css';


class SobreNosottros extends Component {          
  render() { 
    return (
      <div className='App'>
        <VistaN/>
        <ConN/>
      </div>
    );
  }
}

export default SobreNosottros;