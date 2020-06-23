import React from 'react';

const CadastroR = () => {
    return (

        <div className="geral-box">

            <span className="title">Cadastro Restaurante</span>

            <div className="form-box">

                <form className="form">

                    <input type="nome" required placeholder="Nome"/>
                    <input type="Email" required placeholder="Email"/>
                    <input type="password" required placeholder="Senha" />
                    <input type="text" required placeholder="Endereço" />

                    <button type="submit" className="button-form">Cadastrar</button>
                    <a className="sub" href="/login">já tem cadastro? arrocha o nó no login.</a>
                </form>
            </div>
        </div>
    )
}

export default CadastroR;