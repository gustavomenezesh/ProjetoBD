import React, { useEffect, useState } from 'react';

import Sidebar from '../Components/SideBar';
import Card from '../Components/CardRestaurante';
import './styles.css';

import gratis from '../../../assets/card1.png';
import rapida from '../../../assets/card2.png';
import dezconto from '../../../assets/card3.png';
import promo from '../../../assets/cards4.png';
import { Link } from 'react-router-dom';
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
    
    async function handleCleanFilter(e) {

        await api.get('restaurants').then(response => {
            setRestaurants(response.data);
        })

        setSelectFilter(false);
        const input = document.querySelector('input[name=search]')
        input.value = '';

    }

    useEffect (() => {

        api.get('restaurants').then(response => {
            setRestaurants(response.data);
        })


    }, [])


    console.log(restaurants.sort((a,b) => a.name < b.name))
    

    function handleOpenRestaurant( id ) {

        localStorage.setItem('rest', id);

    }

    async function handleSearch(e) {

        const input = document.querySelector('input[name=search]')
        
        if (input.value.length !== 0){

            await api.get(`restaurantsByName?name=${input.value.toLowerCase()}`).then(response => {
                setRestaurants(response.data);
            })

            setSelectFilter(true);
            setFilter(input.value);

        }else {

            api.get('restaurants').then(response => {
                setRestaurants(response.data);
            })
    
            setSelectFilter(false);

        }

        

    }

    async function handleFilterEntrega(e){

        const click = e.target.name;

        if (click === 'gratis'){
            await api.get(`delivery?type=${true}`).then(response => {
                setRestaurants(response.data);
            })
            setFilter('Entrega grátis');
            setSelectFilter(true);
        }else if (click === 'rapida'){
            await api.get(`delivery?type=${false}`).then(response => { 
                setRestaurants(response.data);
            })
            setFilter('Entrega rápida');
            setSelectFilter(true);
        }else if (click === 'dezconto'){
            await api.get(`populars`).then(response => {
                setRestaurants(response.data);
            })
            setFilter('Restaurantes popular');
            setSelectFilter(true);
        }else {
            await api.get('promotion').then(response => {
                setRestaurants(response.data)
            })
            setFilter('Promoção');
            setSelectFilter(true);
        }

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
                        <input type="search" onChange={ handleSearch } name="search" id="search" placeholder="Pesquisar"/>
                        {/* <button type="submit" onClick={ handleSearch } name="search" >Pesquisar</button> */}
                    </div>
                </div>
                <div className="promo">
                    <img src={gratis} alt="Frete grátis" name="gratis" onClick={handleFilterEntrega}/>
                    <img src={rapida} alt="Entrega Rápida" name="rapida" onClick={handleFilterEntrega} />
                    <img src={dezconto} alt="Promoções da semana" name="dezconto" onClick={handleFilterEntrega} />
                    <img src={promo} alt="Promoções da semana" name="promo" onClick={handleFilterEntrega} />
                </div>
                { selectFilter ? <div className="filter-2"><h2>Buscando por "{filter}"</h2> <button type="submit" className="button" onClick={handleCleanFilter} >Limpar filtro</button> </div> : null }
                { restaurants.length === 0 ? <div className="err"><h2>Nenhum resultado encontrado.</h2></div> : null}
                <div className="cards-rest">

                    {restaurants.map(restaurant => (
                        <Link className="Link" to="/restaurant" onClick={() => handleOpenRestaurant(restaurant.id)} ><Card restaurant={restaurant} /></Link>
                    ))}

                </div>
            </div>
        </div>

    );
}

export default User;