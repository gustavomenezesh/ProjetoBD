import React from 'react';
import Sidebar from '../../Usuario/Components/SideBar';
import api from '../../../api';
import { useEffect, useState } from 'react';
import Hist from '../Components/CardHistorico';

import './styles.css';

const MyOrders = () => {

    const [ pedidos, setPedidos ] = useState([]);

    useEffect(() => {

        api.get(`filterOrders?id=${localStorage.getItem('id')}`).then(response => {
            setPedidos(response.data);
        })

    }, [])

    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">
               <h2>Histórico de pedidos</h2>

               <div className="grid-hist">
                   {pedidos.map(prato => (
                        <Hist prato={prato}/>
                   ))}
               </div>

            </div>
        </div>
    );
}

export default MyOrders;