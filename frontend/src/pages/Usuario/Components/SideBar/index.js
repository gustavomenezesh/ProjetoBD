import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../../api';

import './styles.css';

const Sidebar = () => {

    function handleClearStorage(){
        localStorage.removeItem('rest');
    }

    const history = useHistory()
    const [ user, setUser ] = useState([]);

    function handleLogOut() {

        localStorage.removeItem('id');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('type');
        localStorage.removeItem('rest');

        history.push('/');
    }

    useEffect(() => {

        const id = localStorage.getItem('id');

        api.get(`user/${id}`).then(response => {
            setUser(response.data[0]);
        })
        
    }, [])

    return (

        <div className="sidebar">
            
            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" />
            <h3>{user.name}</h3>
            <h4>{user.adress}</h4>

            <ul className="options">
                <li className="option"><Link className="link"to="/home" onClick={handleClearStorage} >Início</Link></li>
                <li className="option"> <Link className="link"to="profile" onClick={handleClearStorage} >Editar Perfil</Link></li>
                <li className="option"> <Link className="link"to="cart" onClick={handleClearStorage} >Carrinho</Link></li>
                <li className="option" ><Link className="link"to="profile" onClick={handleClearStorage} >Meus Pedidos</Link></li>
                <li className="option"> <Link className="link" onClick={handleLogOut} >Sair</Link></li>
            </ul>
        </div>

    );
}

export default Sidebar;