import React from 'react';
import { FiShoppingBag, FiShoppingCart, FiUser, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
            
                    <Link to="/home" className="link">
                        <FiShoppingBag color="#19B5FE"/>
                        Meus pedidos
                    </Link>
                    <Link to="/home" className="link">
                        <FiShoppingCart color="#19B5FE"/>
                        Carrinho
                    </Link>

                    <Link to="/profile" className="link">
                        <FiUser />
                        Perfil
                    </Link>

            </div>
        </nav>
    )
}

export default Navbar;