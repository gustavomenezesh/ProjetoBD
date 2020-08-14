import React, { useEffect } from 'react';
import api from '../../../../api';
import { useState } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

const Hist = ({ prato }) => {

    const comidas = prato.idfoods;
    const [ name, setName ] = useState('');
    const [ image, setimage ] = useState('');

    useEffect(() => {
        api.get(`restaurants/${prato.restid}`).then(response => {
            setName(response.data[0].name)
            setimage(response.data[0].image)
        })
    })

    function handleOpenRestaurant( id ) {
        localStorage.setItem('rest', id);
    }

    return (

        <div className="card-4">
            <img src={image} alt="Logo do restaurante" />
            <h3>{name}</h3>
            <span>Local de entrega: {prato.adress}</span>
            <div className="comidas" >
                {comidas.map(comida => (
                    <div className="comida">
                        <span>{comida.qnt}x </span>
                        <span>{comida.name}</span>
                    </div>
                ))}
            </div>
            <span className="total">TOTAL: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(prato.value)}</span>


            <Link to="/restaurant" onClick={() => handleOpenRestaurant(prato.restid)} ><button type="button" >Ir para restaurante</button></Link>
        </div>

    );
}

export default Hist;