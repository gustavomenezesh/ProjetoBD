import React from 'react';
import { FiShoppingBag, FiShoppingCart, FiUser, FiHome } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

    const history = useHistory();

    function handleLogout(e){

        e.preventDefault();

        localStorage.removeItem('type');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('id');

        history.push('/');

    }

    return (
        <nav className="nav-user">

            <Link to="/home" className="homelogo">
                <FiHome />
            </Link>
            
            <div className="search-box">
                    
                <input name="search" type="text" placeholder="Pesquisar" className="search"/>
                <button type="button" className="button-search">Pesquisar</button>
            </div>
            <div className="nav-links">
                <ul className="drops">
                    <li>
                        <Link to="/home" className="link">
                            <FiShoppingBag color="#19B5FE"/>
                            Meus pedidos
                        </Link>
                    </li>
                    <li>
                        <Link to="/home" className="link">
                            <FiShoppingCart color="#19B5FE"/>
                            Carrinho
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="link">
                            <FiUser />
                            Perfil
                        </Link>
                        <ul className="drop">
                            <li>
                                <Link to="/profile" className="link">Editar Perfil</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout} className="link">Sair</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;