import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Sidebar = () => {

    return (

        <div className="sidebar">
            
            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" />
            <h3>Vinicius Santos</h3>
            <h4>Rua São Francisco, 81 C</h4>

            <ul className="options">
                <li className="option"><Link className="link"to="/home">Início</Link></li>
                <li className="option"> <Link className="link"to="profile">Editar Perfil</Link></li>
                <li className="option"> <Link className="link"to="cart">Carrinho</Link></li>
                <li className="option" ><Link className="link"to="profile">Meus Pedidos</Link></li>
                <li className="option"> <Link className="link"to="profile">Sair</Link></li>
            </ul>
        </div>

    );
}

export default Sidebar;