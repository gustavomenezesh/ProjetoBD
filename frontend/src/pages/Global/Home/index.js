import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {

    return (

        <div className="home">

            <aside className="slogan">
                    <h1>Oxe food!</h1>
                    <span>
                        Deixe de arrudeio e vem comer.<br />
                        As melhores comidas da região<br />
                        e se não for eu cegue.
                    </span>
            </aside>

            <form className="form-box">

                <h2>Login</h2>

                <input name="email" placeholder="Email" />
                <input name="senha" placeholder="Senha" />

                <button type="submit">Entrar</button>
                <Link className="link" to="/cadastro">Cadastre-se, é sem frescura</Link>

            </form>

        </div>

    );
}

export default Home;