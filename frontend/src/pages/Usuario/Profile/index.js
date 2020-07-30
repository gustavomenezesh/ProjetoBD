import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/SideBar';
import api from '../../../api';

import './styles.css';

const Profile = () => {

    const [ formData, setFormData ] = useState({
        id: '',
        name: '',
        adress: '',
        pass: '',
        newpass: ''
    })

    const [ id, setId ] = useState('');
    const [ name, setName ] = useState('');
    const [ adress, setAdress ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ passBool, setPassBool ] = useState(false)

    function handlehangeInput(e) {

        e.preventDefault();
        const { name, value } = e.target;

        setFormData({...formData, [name]: value})
        
    }

    useEffect(async () => {

        const id = localStorage.getItem('id');

        await api.get(`user/${id}`).then(response => {

            setId(response.data[0].id);
            setName(response.data[0].name);
            setAdress(response.data[0].adress);
            setPass(response.data[0].pass);

        })
        
    }, []);

    useEffect(() => {

        if (formData.pass !== pass){
            setPassBool(true)
        }else{
            setPassBool(false)
        }

    }, [formData.pass])

    async function handleSubmit(e) {

        e.preventDefault();

        setFormData({...formData, id: id})

        if (formData.name.length === 0 ){
            setFormData({...formData, name: name})
        }
        if (formData.adress.length === 0 ){
            setFormData({...formData, adress: adress})
        }
        if (formData.name.length === 0 ){
            setFormData({...formData, newpass: pass})
            console.log(formData.newpass);
        }

        /* if (passBool){
            await api.post('clientsUpdate', formData)
        } */

    }    
    console.log(`id: ${formData.id}, name: ${formData.name}, adress: ${formData.adress}, newpass: ${formData.newpass}`);
    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <div className="space"></div>

                <form className="form-box" onSubmit={handleSubmit} >
                    
                    <h2>Perfil</h2>
                    <input type="name" onChange={handlehangeInput} name="name" placeholder="Nome"/>
                    <input type="name" onChange={handlehangeInput} name="adress" placeholder="Endereço"/>
                    {passBool ?  <p>A senha atual não corresponde</p> : null}
                    <input type="password" onChange={handlehangeInput} name="pass" placeholder="Senha atual" />
                    <input type="password" onChange={handlehangeInput} name="newpass" placeholder="Nova senha"/>

                    <button type="submit">Salvar</button>

                </form>
            </div>
        </div>
    );

}

export default Profile;