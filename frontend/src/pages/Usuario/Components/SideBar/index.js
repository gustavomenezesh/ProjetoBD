import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

const Sidebar = () => {

    function handleClearStorage(){
        localStorage.removeItem('rest');
    }

    const history = useHistory()

    function handleLogOut() {

        localStorage.removeItem('id');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('type');
        localStorage.removeItem('rest');

        history.push('/');
    }

    return (

        <div className="sidebar">
            
            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" />
            <h3>Vinicius Santos</h3>
            <h4>Rua São Francisco, 81 C</h4>

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