import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Home from '../container/Home';
import Carrier from '../container/Carrier';
/* import Camionero from '../container/Servicios';
import Company from '../container/Company'; */

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Carrier" component={Carrier}/>
           {/*  <Route path="/camionero" component={Camionero}/>
            <Route path="/Company" component={Company}/> */}
           
        </Switch>
    </BrowserRouter>
);

export default Router;