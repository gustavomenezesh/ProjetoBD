import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Option = () => {

    return (

        <div className="geral-box">

            <span className="title">Cadastrar como:</span>

            <div className="button-group">
                <Link to="cadastroc">
                    <button className="button-form sel1">Cliente</button>
                </Link>
                <Link to="cadastror">
                    <button className="button-form sel2">Restaurante</button>
                </Link>
            </div>

        </div>
    );
}

export default Option;