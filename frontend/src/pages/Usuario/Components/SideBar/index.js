import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../../api';

import './styles.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    function handleClearStorage(){
        localStorage.removeItem('rest');
    }

    const history = useHistory()
    const [ user, setUser ] = useState([]);
    const cartSize = useSelector(state => state.cart.length);

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

    const [ addresses, setAddresses] = useState([])

    useEffect(() => {

        api.get(`listAdress?id=${localStorage.getItem('id')}`).then(response => {
            setAddresses(response.data);
        })
    })

    const [ formAdress, setformAdress ] = useState({
        title: '',
        adress: '',
        client: localStorage.getItem('id'),
    })

    function handleSubmit(e) {
        const { name, value } = e.target;
        setformAdress({...formAdress, [name]: value});

    }

    async function addAdress(e){

        e.preventDefault();

        api.get(`listAdress?id=${localStorage.getItem('id')}`).then(response => {
            setAddresses(response.data);
        })

        const { title, adress, client } = formAdress;
        const position = addresses.length;

        const data = {
            title,
            adress,
            position,
            client,
        }

        console.log(data);

        await api.post('addAdress', data);

        setformAdress({
            title: '',
            adress: '',
            client: localStorage.getItem('id'),
        })

    }



    async function handleChangeState(e){
        const id = e.target.value;
        localStorage.setItem('adress', id);
        setUser({...user, adress: addresses[id].adress});
    }
    

    return (

        <div className="sidebar">
            
            <img alt="avatar" src = {user.image === null ? "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg" : user.image} />
            <h3>{user.name}</h3>
            <h4>{user.adress}</h4>
                
            <div className="options-filter">

                <label for="filter">Endereços</label>
                <select name="filter" id="filter" onChange={handleChangeState}>
                    {addresses.map(adress => (
                        <option id={adress.id} selected={ adress.adress === localStorage.getItem('adress') ? "selected" : null } value={adress.position}>{adress.title}</option>
                    ))}
                </select>

            </div>

            <div className="add-adress">
                <form onSubmit={addAdress}>
                    <input type="text" onChange={handleSubmit} name="title" value={formAdress.title} required placeholder="Titulo"/>
                    <input type="text" onChange={handleSubmit} name="adress" value={formAdress.adress} required placeholder="Endereço"/>
                    <button type="submit">Adicionar endereço</button>
                </form>
            </div>

            <ul className="options">
                <li className="option"><Link className="link"to="/home" onClick={handleClearStorage} >Início</Link></li>
                <li className="option"> <Link className="link car" to="/cart" onClick={handleClearStorage} >
                <div>
                    <div>
                        Carrinho
                    </div>
                    {cartSize !== 0 ? <div className="number"> {cartSize}</div> : null}
                </div>
                </Link></li>
                <li className="option" ><Link className="link"to="/orders" onClick={handleClearStorage} >Meus Pedidos</Link></li>
                <li className="option"> <Link className="link" onClick={handleLogOut} >Sair</Link></li>
            </ul>
        </div>

    );
}

export default Sidebar;