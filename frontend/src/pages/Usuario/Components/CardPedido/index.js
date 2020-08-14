import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../../api';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../../../store/modules/cart/actions';


const CardPedido = ({ prato }) => {

    const [ info, setInfo ] = useState([]);

    useEffect(() => {

        api.get(`foods/${prato.food}`).then(response => {
            setInfo(response.data[0]);
        })

    }, []);

    const dispatch = useDispatch();
        
    function increment(plate) {
        dispatch(CartActions.updateAmount({
            ...plate,
            food: plate.food,
            qnt: plate.qnt + 1,
            price: info.price,
        }));
    }

    function decrement(plate) {
        dispatch(CartActions.updateAmount({
            food: plate.food,
            qnt: plate.qnt - 1,
            price: info.price,
        }));
    }

    function handleRemoveProduct(plate) {
        dispatch(CartActions.removeFromCart({...plate, food: plate.id}));
    }

    return (

        <div className="card">
            <img src={ info.image === null ? "https://i.pinimg.com/originals/af/7a/c8/af7ac8de430e437391d613ccb52eede3.png" : info.image } alt="imagem prato" />
            <h3>{info.name}</h3>
            <span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.price * prato.qnt)}</span>

            <div>
                <button onClick={ () => decrement(prato) }name="minus" className="count minus" >-</button>
                <p>{prato.qnt}</p>
                <button onClick={ () => increment(prato) } name="plus" className="count plus" >+</button>
            </div>

            <button type="button" onClick={ () => handleRemoveProduct(prato) }>Remover</button>
        </div>

    );
}

export default CardPedido;