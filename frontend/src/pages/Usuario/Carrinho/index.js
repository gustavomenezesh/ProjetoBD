import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/SideBar';
import CardPedido from '../Components/CardPedido';

import './styles.css';
import api from '../../../api';

const Cart = () => {

    const [ car, setCar ] = useState([]);
    const [ pratos, setPratos ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ change, setChange ] = useState(false);

    useEffect (() => {

        api.get('carrinho').then(response => {
            setCar(response.data);
        })
        setChange(true);

    }, [])

    useEffect( () => {


        for (let i = 0; i < car.length; i++) {
            const element = car[i];
            api.get(`foods/${element.food}`).then(response => {
                setPratos(response.data);
                setTotal(total + (response.data[0].price * element.qnt));
            })
        }



    }, [change])

    function handleFinish() {
        console.log(pratos)
    }
    
    return (

        <div className="main">
            <Sidebar />

            <div className="main-content">
                <div className="top">
                    <button className="clear" type="submit" >Limpar Carrinho</button>
                    <div className="info-pedido">
                    
                        <span>Total: R$ {total}</span>
                        <button className="finish" type="submit" onClick={handleFinish} >Finalizar compra</button>
                    
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