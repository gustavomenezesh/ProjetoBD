import React, { useState } from 'react';
import './styles.css';

const CardPrato = () => {

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

            <img src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png" alt="imagem prato" />
            <h3>Nome do prato</h3>
            <span>R$ 30,00</span>

            <p className="p">Descrição do prato</p>
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