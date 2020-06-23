import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login'
import Cadastroc from './pages/cadastroC';
import Cadastror from './pages/CadastroR';
import Option from './pages/Option';
import User from './pages/user';

import { isAuth } from './api/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        isAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )}/>
)
 
const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} />
                <Route path="/corr" component={Option} />
                <Route path="/cadastroc" component={Cadastroc} />
                <Route path="/cadastror" component={Cadastror} />
                <PrivateRoute path="/home" component={User} />

            </Switch>
        </BrowserRouter>

    );
};

export default Routes;