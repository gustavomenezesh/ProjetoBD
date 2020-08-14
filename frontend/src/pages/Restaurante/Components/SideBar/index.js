import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../../api';

import './styles.css';

const Sidebar = () => {

    function handleClearStorage(){
        localStorage.removeItem('rest');
    }

    const history = useHistory()
    const [ rest, setRest ] = useState([]);
    const [ state, setState ] = useState();
    const [ frete, setFrete ] = useState();

    function handleLogOut() {

        localStorage.removeItem('id');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('type');
        localStorage.removeItem('rest');

        history.push('/');
    }
    
    

    useEffect(() => {

        const id = localStorage.getItem('id');

        api.get(`restaurants/${id}`).then(response => {
            setRest(response.data[0]);
            setFrete(response.data[0].entrega);
            setState(response.data[0].status);
        })

    }, [])

    async function handleChangeState(e){

        const id = e.target.value;

        if ( id == 1 && state !== true)
            api.post(`status?id=${localStorage.getItem('id')}&state=${true}`)
        else {
            api.post(`status?id=${localStorage.getItem('id')}&state=${false}`)
        }
    }

    async function handleChangeFrete(e) {

        const id = e.target.value;

        if (id == 1 && frete !== true)
            api.post(`frete?id=${localStorage.getItem('id')}&frete=${true}`)
        else {
            api.post(`frete?id=${localStorage.getItem('id')}&frete=${false}`)
        }

    }

    return (

        <div className="sidebar">
            
            <img alt="avatar"src = {rest.image === null ? "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" : rest.image} />
            <h3>{rest.name}</h3>
            <h4>{rest.adress}</h4>

            <div className="options-filter">

                <label for="filter">Estado</label>
                <select name="filter" id="filter" onChange={handleChangeState}>
                    <option selected={state ? "selected" : null} value="1">Aberto</option>
                    <option selected={ !state ? "selected" : null } value="2">Fechado</option>
                </select>

                <label for="filter">Frete</label>
                <select name="filter" id="filter" onChange={handleChangeFrete} >
                    <option selected={frete ? "selected" : null} value="1">Frete Grátis</option>
                    <option selected={ !frete ? "selected" : null } value="2">Frete Rápido</option>
                </select>

            </div>

            <ul className="options">
                <li className="option"><Link className="link"to="/home" onClick={handleClearStorage} >Início</Link></li>
                <li className="option" ><Link className="link"to="/relatorios" onClick={handleClearStorage} >Meus Relatórios</Link></li>
                <li className="option"> <Link className="link" onClick={handleLogOut} >Sair</Link></li>
            </ul>
        </div>

    );
}

export default Sidebar;