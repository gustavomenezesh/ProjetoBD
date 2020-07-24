import React, { useState } from 'react';
import './styles.css';

const CardPedido = () => {

    const [ count, setCount ] = useState(1);

    function handleCount(e){

        e.preventDefault();

        const button = e.target.name;

        if (button === 'minus'){
            
            if (count === 1){
                setCount(1)
            }else {
                setCount(count - 1);
            }
        }else {
            if (count === 15) {
                setCount(15)
            }else {
                setCount(count + 1)
            }
            
        }
        
    }

    return (

        <div className="card">
            <img src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png" alt="imagem prato" />
            <h3>Nome do prato</h3>
            <span>R$ 30,00</span>

            <div>
                <button onClick={handleCount} name="minus" className="count minus" >-</button>
                <p>{count}</p>
                <button onClick={handleCount} name="plus" className="count plus" >+</button>
            </div>

            <button type="button">Remover</button>
        </div>

    );
}

export default CardPedido;