import React from 'react';

import './styles.css';

const Card = ({ restaurant }) => {

    return (

        <div className="content-box">
            <img src="https://i.pinimg.com/originals/af/7a/c8/af7ac8de430e437391d613ccb52eede3.png" />
            <div>
                <h2>{restaurant.name}</h2>
                <h4 className={restaurant.status ? "open" : "close"}>{restaurant.status ? "Aberto" : "Fechado"}</h4>
            </div>
            <div>
                <h3>{restaurant.entrega ? "Entrega Grátis" : "Entrega Rápida"}</h3>
            </div>
        </div>
    );
}

export default Card;