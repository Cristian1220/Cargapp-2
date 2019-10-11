// Dependecies

import React, {Component} from 'react';

// Component-
import Tran from '../../component/Tran/Tran';
import Tranform from '../../component/Tranform/Tranform';
import Contentran from '../../component/Contentran/Contentran';
import ContentCarrier from '../../component/Content-Carrier/ContentCarrier';
import './Carrier.css';


class Carrier extends Component {          
  render() { 
    return (
      <div className='App'>
        <Contentran/>
        <Tran/>
       <ContentCarrier/>
        <Tranform/>
      </div>
    );
  }
}

export default Carrier;