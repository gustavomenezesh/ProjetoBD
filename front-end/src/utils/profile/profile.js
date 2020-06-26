import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api/connection';
import Navbar from '../navbar';

import './styles.css';

const Profile = () => {

    const history = useHistory();

    function handleLogout(e){
        e.preventDefault();

        localStorage.removeItem('type');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('id');

        history.push('/');
    }

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        endereco: ''
    })

    const [ dados, setData ] = useState([])

    useEffect(() => {

        
        api.get(`/clients/${localStorage.getItem('id')}`).then(response => {
            setData(response.data[0])
        })
        
    },[])

    console.log(dados.clientid);

    const [ image, setImage ] = useState('');

    function handleSave(e) {

        e.preventDefault();

        setImage(e.target.value);
    }

    return (
        <div className="geral-content">

            <Navbar />

            <div className="contents">


                <button type="button" className="button-form logout" onClick={handleLogout}>Sair</button>

                <span className="title">Perfil</span>

                <form className="form">

                    
                    <img src={image} /> 
                    <input type="link" onChange={handleSave} />

                    <input name="name" type="name" placeholder="Nome" value={dados.clientname}/>
                    <input name="email"type="email" placeholder="Email" value={dados.clientemail}/>
                    <input name="password" type="text" placeholder="Senha" value={dados.clientpass}/>
                    <input name="endereco" type="text" placeholder="Endereço" value={dados.clientadress}/>

                    <button type="submit" className="button-form">Salvar Alterações</button>

                    

                </form>

                

            </div>


        </div>
    );
}

export default Profile;