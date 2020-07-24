import React from 'react';

import './styles.css';

const Card = () => {

    return (

        <div className="content-box">
            <img src="https://i.pinimg.com/originals/af/7a/c8/af7ac8de430e437391d613ccb52eede3.png" />
            <div>
                <h2>Burguer King</h2>
                <h4>Aberto</h4>
            </div>
            <div>
                <h3>Frete Grátis</h3>
            </div>
        </div>
    );
}

export default Card;