import React, { useState } from 'react';
import Sidebar from '../Components/SideBar';
import api from '../../../api';

import './styles.css';
import { useHistory } from 'react-router-dom';

const ProfileClient = () => {

    const [ formData, setFormData ] = useState({
        id: Number(localStorage.getItem('id')),
        name: '',
        email: '',
        adress: '',
        pass: '',
        newpass: ''
    })

    const history = useHistory();

    function handlehangeInput(e) {

        e.preventDefault();
        const { name, value } = e.target;

        setFormData({...formData, [name]: value})
        
    }

    /* useEffect(() => {

        if (formData.pass !== Oldpass){
            setPassBool(true)
        }else{
            setPassBool(false)
        }

    }, [formData.pass]) */

    async function handleSubmit(e) {

        e.preventDefault();

        setFormData({...formData, pass: formData.newpass});
        await api.post('clientsUpdate', formData);

        history.push('/home');
        

    }    

    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <div className="space"></div>

                <form className="form-box" onSubmit={handleSubmit} >
                    
                    <h2>Perfil</h2>
                    <input type="name" onChange={handlehangeInput} name="name" placeholder="Nome" value={formData.name}/>
                    <input type="name" onChange={handlehangeInput} name="adress" placeholder="Endereço"/>
                    {/* { passBool ?  <p>A senha atual não corresponde</p> : null } */}
                    <input type="password" onChange={handlehangeInput} name="pass" placeholder="Senha atual" />
                    <input type="password" onChange={handlehangeInput} name="newpass" placeholder="Nova senha"/>

                    <button type="submit">Salvar</button>

                </form>
            </div>
        </div>
    );

}

export default ProfileClient;