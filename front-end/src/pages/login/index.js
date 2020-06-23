import React from 'react';
import './styles.css';

const Login = () => {

    return (
        <div className="geral-box">

            <span className="title">Login</span>

            <div className="login-box">

                <form className="form">
                    <input type="email" required placeholder="Email" />
                    <input type="password" required placeholder="Senha"/>

                    <button type="submit" className="button-form" >Entrar</button>
                    <a className="sub" href="/corr">Ainda não tem login? Dale no cadastro</a>
                </form>

            </div>

        </div>
    );
}


export default Login;