import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Home from '../container/Home';
import Carrier from '../container/Carrier';
import Camionero from '../container/Servicios';
import Company from '../container/Company'; 
import SobreNosotros from '../container/SobreNosotros'; 
import ContaC from '../container/ContaC/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Carrier" component={Carrier}/>
            <Route path="/Camionero" component={Camionero}/>
            <Route path="/Company" component={Company}/> 
            <Route path="/SobreNosotros" component={SobreNosotros}/> 
            <Route path="/ContaC" component={ContaC}/> 
        </Switch>
    </BrowserRouter>
);

export default Router;