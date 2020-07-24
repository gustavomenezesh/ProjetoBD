import React from 'react';

import Sidebar from '../Components/SideBar';
import Card from '../Components/CardRestaurante';
import './styles.css';

import gratis from '../../../assets/card1.png';
import rapida from '../../../assets/card2.png';
import { Link } from 'react-router-dom';

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

    function handleFilter(e){

        if (e.target.value === 'Todas'){
            console.log('limpou o filter')
        }
        console.log(e.target.value)
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
                            {categorias.map(item => (
                                <option value={categorias.indexOf(item)+1} key={categorias.indexOf(item)}>
                                    {categorias[categorias.indexOf(item)]} 
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
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                    <Link className="Link" to="/restaurant"><Card /></Link>
                </div>
            </div>
        </div>

    );
}

export default User;