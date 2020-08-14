import React, { useState } from 'react';
import api from '../../../../api';
import './styles.css';

import * as CartActions from '../../../../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

const CardPrato = ({ prato }) => {

    const [ add, setAdd ] = useState('Adicionar ao carrinho')
    const dispatch = useDispatch();

    const car = useSelector(state =>

        state.cart.map(plate => ({
        ...plate,
        }))
    );

    const cartSize = useSelector(state => state.cart.length);

    function handleAddProduct(plate) {
        console.log(cartSize);
        if (cartSize !== 0){

            if (car[0].restid === plate.restid){

                setAdd('Adicionado com sucesso!');
                const price = prato.percent < 1 ? (1 - prato.percent) * prato.price : prato.price * prato.percent;

                dispatch(CartActions.addToCart({...plate, qnt: 1, price: price, food: plate.id}));
                
                setTimeout(() => {
                    setAdd('Adicionar ao carrinho');
                }, [2000])

            }else {
                const button = document.getElementById(`${prato.name}`);
                button.style.background = "red";
                button.style.color = "white";
                button.style.cursor = "not-allowed"
                setAdd('Não foi possível adicionar!');
            }

        }else {
            setAdd('Adicionado com sucesso!');

            const price = prato.percent < 1 ? (1 - prato.percent) * prato.price : prato.price * prato.percent;
            console.log(price)

            dispatch(CartActions.addToCart({...plate, qnt: 1, price: price, food: plate.id}));
            
            setTimeout(() => {
                setAdd('Adicionar ao carrinho');
            }, [2000])
        }
    }
    
    useEffect( () => {
        const span = document.getElementById(`${prato.id}`);
        if (prato.percent !== 0 && prato.percent <= 1){

            span.style.textDecoration = 'line-through';
            span.style.opacity = '0.5';
            span.style.color = 'red';

        }else if (prato.percent > 1) {
            span.style.display = 'none';
        }
    })
    
    console.log(prato.percent);
    return (

        <div className="card-3">

            <img src={prato.image} alt="imagem prato" />
            <h3>{prato.name}</h3>
            <span id={prato.id} >{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.price)}</span>
            { prato.percent > 0 && prato.percent <= 1 ? <span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format((1 - prato.percent) * prato.price)}</span> : prato.percent > 1 ? <span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.percent * prato.price)}</span> : null} 

            <p className="p">{prato.description}</p>
            {/* <div>
                <button onClick={handleCount} name="minus" className="count minus" >-</button>
                <p>{count}</p>
                <button onClick={handleCount} name="plus" className="count plus" >+</button>
            </div> */}

            <button id={prato.name} onClick={() => handleAddProduct(prato)} type="button">{add}</button>
        </div>

    );
}

export default CardPrato;