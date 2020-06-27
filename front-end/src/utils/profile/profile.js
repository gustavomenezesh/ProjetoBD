import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/connection';
import Navbar from '../navbar/navbar';

import './styles.css';

const Profile = () => {

    

    const [ dados, setData ] = useState([])
    
    useEffect(() => {

        
        api.get(`/clients/${localStorage.getItem('id')}`).then(response => {
            setData(response.data[0])
        })
        
    },[])

    const { clientname, clientemail, clientpass, clientadress } = dados;

    const [ alterData, setAlterData ] = useState({
        name: clientname,
        email: clientemail,
        pass: clientpass,
        adress: clientadress
    })


    return (
        <div className="geral-content">

            <Navbar />

            <div className="contents">

                <span className="title">Perfil</span>

                <form className="form">

                    <input name="name" type="name" placeholder="Nome" value={alterData.name}/>
                    <input name="email"type="email" placeholder="Email" value={alterData.email}/>
                    <input name="password" type="text" placeholder="Senha" value={alterData.pass}/>
                    <input name="endereco" type="text" placeholder="Endereço" value={alterData.adress}/>

                    <button type="submit" className="button-form">Salvar Alterações</button>

                    

                </form>

                

            </div>


        </div>
    );
}

export default Profile;