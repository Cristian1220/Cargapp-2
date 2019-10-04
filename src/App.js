// Dependecies

import React, {Component} from 'react';

//containert
import Router from './Router/Router';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';



class App extends Component {          
  render() { 
    return (
      <div className='App'>
       <Header/>
       <Router/>
       <Footer/>
      </div>
    );
}
}

export default App;
