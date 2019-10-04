// Dependecies

import React, {Component} from 'react';

// Component-
import Conten from '../../component/Driver/Conten';
import FormDriver from '../../component/FormDriver/FormDriver';
import Box from '../../component/Box/Box';

import './Company.css';


class Company extends Component {          
  render() { 
    return (
      <div className='App'>
        <Conten/>
        <Box/>
        <FormDriver/>
      </div>
    );
}
}

export default Company;