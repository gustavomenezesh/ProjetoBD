import React, { useState, useEffect } from 'react';
import './styles.css';

const CardRel = ({ prato, qnt, bool }) => {
    

    return (

        <div className="card">
            { bool !== 2 ? <img src={prato.image} alt="imagem prato" /> : null }
            <h3>{prato.name}</h3>
            <span>{bool === 3? `Preço médio ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.medPrice)}` : bool !== 2 ? Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.price) : `Valor: ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.value)}` }</span>
            <span>{ bool === 1? `Quantidade: ${qnt}` : null }</span>
            <span>{ bool === 2 ? `Frete: ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.frete)}` : null }</span>
            <span>{ bool === 2 ? 
                `Data: 
                ${prato.date.split('T')[0].split('-')[2]}/
                ${prato.date.split('T')[0].split('-')[1]}/
                ${prato.date.split('T')[0].split('-')[0]}` :null }
            </span>
            { bool !== 2 ? <button className="edit">Editar</button> : null }
            { bool !== 2 ? <button type="button" >Remover do cardápio</button> : null }
        </div>

    );
}

export default CardRel;