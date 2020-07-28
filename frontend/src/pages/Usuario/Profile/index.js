import React from 'react';
import Sidebar from '../Components/SideBar';

import './styles.css';

const Profile = () => {

    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <div className="space"></div>

                <form className="form-box">
                    
                    <h2>Perfil</h2>
                    <input type="name" placeholder="Nome"/>
                    <input type="name" placeholder="Endereço"/>
                    <input type="password" placeholder="Senha"/>

                    <button type="submit">Salvar</button>

                </form>
            </div>
        </div>
    );

}

export default Profile;