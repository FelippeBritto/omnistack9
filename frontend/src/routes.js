import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Index';
import Dashboard from './pages/Dashboard/Index';
import New from './pages/New/Index';


export default function Routes() {
   return (
      <BrowserRouter >
         {/* switch garante que apenas uma rota seja executada por vez */}
         <Switch>
            {/* o exact faz com que a rota so seja chamada caso o caminho seja exatamente igual */}
            <Route path="/" exact component={Login} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/New" component={New} />
            <Route path="*" component={() => <h1>404 Not Found</h1>} />
         </Switch>
      </BrowserRouter>
   )
}