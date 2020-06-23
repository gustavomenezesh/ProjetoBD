import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login'
import Cadastroc from './pages/cadastroC';
import Cadastror from './pages/CadastroR';
import Option from './pages/Option';
 
const Routes = () => {
    return (

        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} />
            <Route path="/corr" component={Option} />
            <Route path="/cadastroc" component={Cadastroc} />
            <Route path="/cadastror" component={Cadastror} />
        </BrowserRouter>

    );
};

export default Routes;