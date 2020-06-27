import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/connection';
import Navbar from '../../utils/navbar/navbar';

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
    const [ id, setId ] = useState(null);
    const [ filter, setFilter ] = useState(true);

    useEffect(() =>{

        api.get('categorias').then(response => {
            setCategorias(response.data);
        });

    } ,[id]);


    useEffect(() => {
        api.get('restaurants').then(response => {
            setRestaurants(response.data);
        });
    }, [filter])


    async function handleFilterRest( id ) {

        setId(id);

        await api.get(`restaurants/${id}`).then(response => {
            setRestaurants(response.data);
        });

    }

    useEffect(() => {

        if (restaurants.length === 0){
            setFilter(false);
        }else{
            setFilter(true);
        }
    }, [restaurants]);

    function handleClearFilter(e) {
        e.preventDefault();

        setId(null);
        setFilter(true);

        api.get('restaurants').then(response => {
            setRestaurants(response.data);
        });
    }


    return (
        <div className="geral-content">

            <Navbar />
            <div className="contents">

                <div className="categoria">
                    <p className="title-second">Categorias</p>
                    <ul className="ulcateg">
                    {categorias.map(item => (
                            <li key={item.idcateg} className="item list" onClick={() => handleFilterRest(item.idcateg)}>
                                {item.namecateg} 
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="restaurants">
                    {id === null ? (<p className="title-second">Restaurantes</p>) : ( 
                        <div className="filter">
                            <p className="title-second">
                                {categorias[id-1] !== undefined ? categorias[id-1].namecateg : ''}
                            </p>
                            <button className="button-form" onClick={handleClearFilter}>
                                Remover filtro
                            </button>
                        </div>)}
                    {filter ? (
                        <ul className="cards">
                            {restaurants.map(restaurant => (
                                <Cardrest key={restaurant.restid} data={restaurant} />
                            ))}
                        </ul>
                    ) : <span> Não há restaurantes cadastrados nessa categoria.</span> }
                    
                </div>

            </div>
        </div>
        
    )
}
export default User;