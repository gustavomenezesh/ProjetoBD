import React from 'react';
import Sidebar from '../Components/SideBar';
import CardPedido from '../Components/CardPedido';

import './styles.css';

const Cart = () => {

    return (

        <div className="main">
            <Sidebar />

            <div className="main-content">
                <div className="top">
                    <button className="clear" type="submit" >Limpar Carrinho</button>
                    <div className="info-pedido">
                    
                        <span>Total: R$ 1.000,00</span>
                        <button className="finish" type="submit" >Finalizar compra</button>
                    
                    </div>  
                </div>

                <div className="cards-2">
                
                    <CardPedido />              
                    <CardPedido />              
                    <CardPedido />              
                    <CardPedido />              
                    <CardPedido />              
                    <CardPedido />                           

                </div>
            </div>
        </div>
    );
}

export default Cart;