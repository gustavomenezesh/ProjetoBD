import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/connection';
import Navbar from '../../utils/navbar';

import './styles.css'
import Cardrest from '../../utils/cards/cardrest';


const User = () => {

    const history = useHistory();

    function handleLogout(e){
        e.preventDefault();

        localStorage.removeItem('type');
        localStorage.removeItem('isAuth');

        history.push('/');
    }

    const [ categorias, setCategorias ] = useState([]);
    const [ restaurants, setRestaurants ] = useState([]);

    useEffect(() =>{

        api.get('categorias').then(response => {
            setCategorias(response.data);
        });

    } ,[]);

    useEffect(() => {
        api.get('/restaurants').then(response => {
            setRestaurants(response.data);
        });

        console.log(restaurants);
    }, [])


    return (
        <div className="geral-content">

            <Navbar />
            <div className="contents">

                <div className="categoria">
                    <p className="title-second">Categorias</p>
                    <ul className="ulcateg">
                    {categorias.map(item => (
                            <li key={item.idcateg} className="item">
                                {item.namecateg} 
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="restaurants">
                    <p className="title-second">Restaurantes</p>
                    <ul className="cards">
                        {restaurants.map(restaurant => (
                            restaurant.status ? ( <Cardrest key={restaurant.restid} data={restaurant} />): null
                        ))}
                    </ul>
                    
                </div>

            </div>
        </div>
        
    )
}
export default User;