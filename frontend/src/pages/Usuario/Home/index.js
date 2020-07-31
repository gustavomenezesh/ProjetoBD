import React, { useEffect, useState } from 'react';

import Sidebar from '../Components/SideBar';
import Card from '../Components/CardRestaurante';
import './styles.css';

import gratis from '../../../assets/card1.png';
import rapida from '../../../assets/card2.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../api';


const User = () => {

    const [ items, setItems ] = useState([]);
    const [ restaurants, setRestaurants ] = useState([]);
    const [ selectFilter, setSelectFilter ] = useState(false);
    const [ filter, setFilter ] = useState('');

    useEffect(() => {

        api.get('categs').then(response => {
            setItems(response.data);
            
        });

    }, []);
    
    async function handleFilter(e){

        e.preventDefault();

        const id = e.target.value;
        
        if (id == -1){

            await api.get('restaurants').then(response => {
                setRestaurants(response.data);
            })

            setSelectFilter(false);
            
        }else {

            await api.get(`categs/${id}`).then(response => {
                setRestaurants(response.data);
            });

            setSelectFilter(true);
            for (let i = 0; i < items.length; i++) {

                if (items[i].id == id){
                    setFilter(items[i].name);
                }
                
            }

        }

        
    }
    
    

    useEffect (() => {

        api.get('restaurants').then(response => {
            setRestaurants(response.data);
        })

    }, [])

    const history = useHistory();

    function handleOpenRestaurant( id ) {

        localStorage.setItem('rest', id);

    }

    async function handleSearch(e) {

        const input = document.querySelector('input[name=search]')

        await api.get(`restaurantsByName?name=${input.value}`).then(response => {
            setRestaurants(response.data);
        })

    }

    return (

        <div className="main">
            <Sidebar />
            <div className="main-content">

                <div className="search-box">
                    <div className="filter">

                        <label htmlFor="filter">Categorias</label>
                        <select name="filter" id="filter" onChange={handleFilter}>
                            <option value="-1">Todas</option>
                            {items.map(item => (
                                <option value={items[items.indexOf(item)].id} key={items[items.indexOf(item)].name}>
                                    {items[items.indexOf(item)].name} 
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="search">
                        <input type="search" name="search" id="search" placeholder="Pesquisar"/>
                        <button type="submit" onClick={ handleSearch } name="search" >Pesquisar</button>
                    </div>
                </div>
                <div className="promo">
                    <img src={gratis} alt="Frete grátis"/>
                    <img src={rapida} alt="Entrega Rápida"/>
                    <img src={gratis} alt="Promoções da semana"/>
                </div>
                { selectFilter ? <h2>Buscando por {filter}</h2> : null }
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