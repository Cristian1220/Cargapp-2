// Dependecies

import React, {Component} from 'react';

// Component-
import Content from '../../component/Content/Content';
import CardImage from '../../component/Cardlmage/CardImage';
import './Home.css';


class Home extends Component {          
  render() { 
    return (
      <div className='App'>
        
         <Content />
         <div className="container-img">
          <CardImage />
          <CardImage />
          <CardImage />
         </div>
        
      </div>
    );
}
}

export default Home;