import React, { useState } from 'react';
import './styles.css';

const CardPrato = ({ prato }) => {

    const [ add, setAdd ] = useState('Adicionar ao carrinho')

    function handleAdd(e){

        e.preventDefault();

        if (add === 'Adicionar ao carrinho'){
            setAdd('Adicionado com sucesso!');
        }
        setTimeout(() => {
            setAdd('Adicionar ao carrinho');
        },[1000])
    }

    

    return (

        <div className="card-3">

            <img src={prato.image} alt="imagem prato" />
            <h3>{prato.name}</h3>
            <span>R$ {prato.price}</span>

            <p className="p">{prato.description}</p>
            {/* <div>
                <button onClick={handleCount} name="minus" className="count minus" >-</button>
                <p>{count}</p>
                <button onClick={handleCount} name="plus" className="count plus" >+</button>
            </div> */}

            <button onClick={handleAdd} type="button">{add}</button>
        </div>

    );
}

export default CardPrato;