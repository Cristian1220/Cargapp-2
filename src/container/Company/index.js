// Dependecies

import React, {Component} from 'react';

// Component-
import Formload from '../../component/Formload/Formload';
import Load from '../../component/Loadgenerator/Load';
import Contentload from '../../component/Contentload/Contentload';

import './Company.css';


class Company extends Component {        
  render() { 
    return (
      <div className='App'>
         <Load/>   
        <Formload/>
        <Contentload/>   
      </div>
    );
}
}

export default Company;