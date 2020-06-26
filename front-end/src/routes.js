import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login'
import Cadastroc from './pages/cadastroC';
import Cadastror from './pages/CadastroR';
import Option from './pages/Option';
import Path from './api/auth';
import Profile from './utils/profile/profile';


const PrivateRoute = ({ component: Component, ...rest }) => (
    

    <Route {...rest} render={props => (
        localStorage.getItem('isAuth') ? (
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
                <Route path="/profile" component={Profile} />
                <PrivateRoute path="/home" component={Path} />

            </Switch>
        </BrowserRouter>

    );
};

export default Routes;