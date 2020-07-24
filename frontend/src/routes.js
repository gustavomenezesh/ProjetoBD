import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Global/Home';
import Cadastro from './pages/Global/Cadastro';
import User from './pages/Usuario/Home';
import Cart from './pages/Usuario/Carrinho';
import Profile from './pages/Usuario/Profile';
import ViewRest from './pages/Usuario/ViewRestaurant';
/* import Login from './pages/login'
import Cadastroc from './pages/cadastroC';
import Cadastror from './pages/CadastroR';
import Option from './pages/Option';
import Path from './api/auth';
import Profile from './utils/profile/profile'; */


/* const PrivateRoute = ({ component: Component, ...rest }) => (
    

    <Route {...rest} render={props => (
        localStorage.getItem('isAuth') ? (
            <Component {...props} />

        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

        )
    )}/>
) */
 
const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path="/" component={Home} exact/>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={User} />
                <Route path="/profile" component={Profile} />
                <Route path="/cart" component={Cart} />
                <Route path="/restaurant" component={ViewRest} />
                {/* 
                <Route path="/cadastror" component={Cadastror} />
                <PrivateRoute path="/home" component={Path} /> */}

            </Switch>
        </BrowserRouter>

    );
};

export default Routes;