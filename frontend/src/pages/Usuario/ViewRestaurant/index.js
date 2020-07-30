import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/SideBar';

import './styles.css';
import CardPrato from '../Components/CardPrato';
import api from '../../../api';

const ViewRest = () => {

    const [ restaurant, setRestaurant ] = useState([]);
    const [ cardapio, setCardapio ] = useState([]);
    
    const id = localStorage.getItem('rest');

    useEffect(() => {
        api.get(`restaurants/${id}`).then(response => {
            setRestaurant(response.data[0]);
        })
    }, [])

    useEffect(() => {
        api.get(`menu?id=${id}`).then(response => {
            setCardapio(response.data);
        })
    }, [])

    console.log(restaurant);

    return (

        <div className="main">

            <Sidebar />
            <div className="main-content">

                <div className="top">
                    
                    <div className="title">
                        <img src={restaurant.image} />
                        <h2 className="h2">{restaurant.name}</h2>

                    </div>

                </div>

                <h2 className="h2">Cardápio</h2>

                <div className="menu">
                    {cardapio.map(prato => (
                        <CardPrato  prato={prato} />
                    ))}
                    {/* <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato /> */}
                </div>

            </div>
        </div>
    );
}

export default ViewRest;