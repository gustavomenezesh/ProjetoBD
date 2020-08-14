import React from 'react';
import Sidebar from '../Components/SideBar';
import CardPedido from '../Components/CardPedido';

import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';

import './styles.css';
import { useState } from 'react';
import api from '../../../api';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = () => {

    const car = useSelector(state =>
        state.cart.map(plate => ({
        ...plate,
        subtotal: Math.trunc(plate.price * plate.qnt),
        }))
    );

    console.log(car);

    const total = useSelector(state =>
        state.cart.reduce((totalSum, product) => {
          return totalSum + product.price * product.qnt;
        }, 2)
    );

    const dispatch = useDispatch();
    
    function handleClearCart(car) {
        dispatch(CartActions.clearCart(car));
    }

    const [ addresses, setAddresses] = useState([])

    useEffect(() => {

        api.get(`listAdress?id=${localStorage.getItem('id')}`).then(response => {
            setAddresses(response.data);
        })
    })

    const finish = [];
    const history = useHistory()

    
    const [ bool, setBool ] = useState(false);

    /* api.get(`restaurants/${food}`).then(response => {
        setBool(response.data.entrega);
    }) */

    async function handleFinish(e) {

        car.map(pedido => {
            finish.push(pedido.food);
            finish.push(pedido.qnt);
        })

        const { data } =  await api.get(`user/${localStorage.getItem('id')}`);
        const food = car[0].restid;

        const pedido = {
            idclient: Number(localStorage.getItem('id')),
            idfoods: finish,
            value: total,
            adress: addresses[Number(localStorage.getItem('adress'))-1].adress,
            restid: food,
            frete: bool,
        }

        const recibo = await api.post('doOrder', pedido);
        console.log(recibo);
        handleClearCart(car);
        history.push('/orders');

    }

    return (

        <div className="main">
            <Sidebar />

            <div className="main-content">
                <div className="top">
                    <button className="clear" type="submit" onClick={ () => handleClearCart(car)} >Limpar Carrinho</button>
                    <div className="info-pedido">
                    
                        <span>Total: R$ {total.toFixed(2)}</span>
                        <button className="finish" type="submit" onClick={handleFinish}>Finalizar compra</button>
                    
                    </div>  
                </div>

                <div className="cards-2">

                    {car.map(prato => (
                        <CardPedido prato={prato} />
                    ))}                       

                </div>
            </div>
        </div>
    );
}

export default Cart;