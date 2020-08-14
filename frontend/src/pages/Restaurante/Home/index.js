import React from 'react';
import Sidebar from '../Components/SideBar';

import './styles.css';
import { useEffect, useState } from 'react';
import api from '../../../api';

import CardCardapio from '../Components/cardCardapio';
import AddPrato from '../Components/AddPrato';

const Rest = () => {

    const [ cardapio, setCardapio ] = useState([]);

    function handleAdd(e) {

        e.preventDefault()

        const div = document.querySelector('.add-prato');
        div.classList.add('open');
        
    }

    useEffect(() => {

        api.get(`menu?id=${localStorage.getItem('id')}`).then(response => {
            setCardapio(response.data);
        })

    })
    

    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <AddPrato />

                <div className="cardapio">

                    <h1>Cardápio</h1>
                    <button className="add" onClick={handleAdd} >Adicionar Prato</button>

                </div>
                <div className="cards">
                    
                    {cardapio.map(prato => (

                        <CardCardapio prato={prato} />
            
                    )).reverse()}

                </div>

            </div>
        </div>
    );

}

export default Rest;