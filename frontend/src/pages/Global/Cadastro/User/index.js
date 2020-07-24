import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

const CadastroClient = () => {

    return (
        
        <div className="content">

            <aside className="slogan">
                <h1 className="background">Oxe Food!</h1>
                <span>
                    Tá perdendo tempo abestado?<br />
                    Faz logo teu cadastro e vem<br />
                    aproveitar os melhores <br />
                    restaurantes da região.
                </span>

            </aside>
            <form className="form-box">

                <h2>Cadastro</h2>

                <div className="image">
                    <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" />
                    <div>
                        <h3>Foto do perfil</h3>
                        <input type="file" />
                    </div>
                </div>

                <input type="name" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="name" placeholder="Endereço" />

                <button type="submit" >Cadastrar</button>
                <Link className="link" to="/">
                    Já tem cadastro? Arrocha o nó login.
                </Link>

            </form>
        </div>

    );
}

export default CadastroClient;