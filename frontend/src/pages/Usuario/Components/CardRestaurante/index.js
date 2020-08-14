import React, { useState } from 'react';

import './styles.css';
import { useEffect } from 'react';
import api from '../../../../api';

const Card = ({ restaurant }) => {

    const restcategId = restaurant.categ.split(',')
    restcategId.map(test => {
        restcategId[restcategId.indexOf(test)] = test.replace(/[.*+\-?^$""{}()|[\]\\]/g, '');
    })

    const [ categs, setCategs ] = useState([]);

    useEffect(() => {
            api.get('categs').then(response => {
            setCategs(response.data)
        })
        
    }, []);

    const nameRestCateg = [];
 
    categs.map(categ => {
        restcategId.map(id => {
            if (categ.id === Number(id)){
                nameRestCateg.push(categ.name);
            }
        })
    })

    console.log(nameRestCateg);

    return (

        <div className="content-box">
            <div className="info">
                <img src={ restaurant.image === null ? "https://i.pinimg.com/originals/af/7a/c8/af7ac8de430e437391d613ccb52eede3.png" : restaurant.image } />
                <div className="name-info">
                    <div>
                        <h2>{restaurant.name} </h2>
                        
                        {nameRestCateg.map(name => (
                            <span className="categs">{ name }</span>
                        ))}
                        
                    </div>
                    <div className="state">
                        <h4 className={restaurant.status ? "open" : "close"}>{restaurant.status ? "Aberto" : "Fechado"}</h4>
                    </div>
                </div>
            </div>
            <div>
                <h3>{restaurant.entrega ? "Entrega Grátis" : "Entrega Rápida"}</h3>
            </div>
        </div>
    );
}

export default Card;