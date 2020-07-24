import React, { useEffect, useState } from 'react';

import Sidebar from '../Components/SideBar';
import Card from '../Components/CardRestaurante';
import './styles.css';

import gratis from '../../../assets/card1.png';
import rapida from '../../../assets/card2.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../api';

const categorias = [
    'Chinesa/Japonesa',
    'FastFood',
    'Sobremesa',
    'Hamburguers',
    'Pizza',
    'Açaí',
    'Comida Caseira',
    'Sabduiches',
    'Italiana',
    'Bebidas'
]

const User = () => {

    const [ items, setItems ] = useState([]);
    const [ restaurants, setRestaurants ] = useState([]);
    
    function handleFilter(e){
        
        if (e.target.value === 'Todas'){
            console.log('limpou o filter')
        }
        console.log(e.target.value)
    }
    
    useEffect(() => {

        api.get('categs').then(response => {
            setItems(response.data);
            
        });

    }, []);

    useEffect (() => {

        api.get('restaurants').then(response => {
            setRestaurants(response.data);
        })

    }, [])

    const history = useHistory();

    function handleOpenRestaurant( id ) {

        localStorage.setItem('rest', id);

    }

    return (

        <div className="main">
            <Sidebar />
            <div className="main-content">

                <div className="search-box">
                    <div className="filter">

                        <label htmlFor="filter">Categorias</label>
                        <select name="filter" id="filter" onChange={handleFilter}>
                            <option value="Todas">Todas</option>
                            {items.map(item => (
                                <option value={items[items.indexOf(item)].id} key={items[items.indexOf(item)].name}>
                                    {items[items.indexOf(item)].name} 
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="search">
                        <input type="search" name="search" id="search" placeholder="Pesquisar"/>
                        <button type="submit" name="" >Pesquisar</button>
                    </div>
                </div>
                <div className="promo">
                    <img src={gratis} alt="Frete grátis"/>
                    <img src={rapida} alt="Entrega Rápida"/>
                    <img src={gratis} alt="Promoções da semana"/>
                </div>

                <div className="cards">

                    {restaurants.map(restaurant => (
                        <Link className="Link" to="/restaurant" onClick={() => handleOpenRestaurant(restaurant.id)} ><Card restaurant={restaurant} /></Link>
                    ))}

                    {/* <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link> */}
                </div>
            </div>
        </div>

    );
}

export default User;