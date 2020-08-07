import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../../api';

const CardRel = ({ prato, qnt }) => {


    return (

        <div className="card">
            <img src={prato.image} alt="imagem prato" />
            <h3>{prato.name}</h3>
            <span>R$ {prato.price}</span>
            <span>Quantidade: {qnt}</span>

            <button className="edit">Editar</button>
            <button type="button" >Remover do cardápio</button>
        </div>

    );
}

export default CardRel;