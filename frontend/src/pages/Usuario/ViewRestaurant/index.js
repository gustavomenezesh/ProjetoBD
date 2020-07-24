import React from 'react';
import Sidebar from '../Components/SideBar';

import './styles.css';
import CardPrato from '../Components/CardPrato';

const categorias = [
    'FastFood',
    'Sobremesa',
    'Hamburguers',
    'Bebidas'
]

const ViewRest = () => {

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

                <div className="top">
                    
                    <div className="title">
                        <img src="https://i.pinimg.com/originals/af/7a/c8/af7ac8de430e437391d613ccb52eede3.png" />
                        <h2 className="h2">Burguer King</h2>

                    </div>

                </div>

                <h2 className="h2">Cardápio</h2>

                <div className="menu">
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                    <CardPrato />
                </div>

            </div>
        </div>
    );
}

export default ViewRest;