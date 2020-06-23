import React, { useState, useEffect } from 'react';
import api from '../../api/connection';
import './styles.css';
<<<<<<< HEAD

const CadastroR = () => {

    const [ restcateg, setCategorias ] = useState([]);
    const [ formData, setFormData ] = useState({
        tipo: 'restaurant',
        status: false,
        restname: '',
        restemail: '',
        restpass: '',
        restadress: '',
=======

const items = [
    "Chinesa/Japonesa",
    "FastFood",
    "Açaí",
    "Bebidas",
    "Comida Caseira",
    "Hamburguers",
    "Pizza",
    "Sanduiches",
    "Italiana",
    "Sobremesa"
]

const CadastroR = () => {

    const [ categorias, setCategorias ] = useState([]);
    const [ formData, setFormData ] = useState({
        key: 'restaurant',
        name: '',
        email: '',
        password: '',
        endereco: '',
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
    })

    const [ items, setItems ] = useState([]);

    useEffect(() => {

        api.get('categorias').then(response => {
            setItems(response.data);
        });
    }, []);

    function handleSelect(id){

<<<<<<< HEAD
       

        const alreadySelected = restcateg.findIndex(item => item === id);

        if (alreadySelected >= 0){
            const itemFilter = restcateg.filter(item => item !== id);
            setCategorias(itemFilter);
        }else {
            setCategorias([...restcateg, id]);
=======
        console.log(categorias);

        const alreadySelected = categorias.findIndex(item => item === id);

        if (alreadySelected >= 0){
            const itemFilter = categorias.filter(item => item !== id);
            setCategorias(itemFilter);
        }else {
            setCategorias([...categorias, id]);
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
        }

    }

    function handleinput(event){
        const { name, value } = event.target;

        setFormData({ ...formData, [name] : value});

    }

<<<<<<< HEAD
    async function handleSubmit(e) {
        
        e.preventDefault();

        if (restcateg.length !== 0){

            const {tipo, status, restname, restemail, restpass, restadress } = formData;
            const data = {
                restname,
                restemail, 
                restpass,
                restadress,
                restcateg,
                status,
                tipo
            }
    
            const cadastro = await api.post('restaurantCreate', data);
            console.log(cadastro);
    
            setFormData({
                restname: '',
                restemail: '',
                restpass: '',
                restadress: '',
=======
    function handleSubmit(e) {
        
        e.preventDefault();

        if (categorias.length !== 0){

            const { key, name, email, password, endereco } = formData;
            const data = {
                key,
                name,
                email, 
                password,
                endereco,
                categorias
            }
    
            console.log(data);
    
            setFormData({
                name: '',
                email: '',
                password: '',
                endereco: '',
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
            });
    
            setCategorias([]);

        }else {
            alert('Selecione pelo menos uma categoria');
        }

<<<<<<< HEAD


=======
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
    }

    return (

        <div className="geral-box">

            <span className="title">Cadastro Restaurante</span>

            <div className="form-box">

                <form className="form" onSubmit={handleSubmit}>

                    <input 
                        onChange={handleinput} 
<<<<<<< HEAD
                        value={formData.restname} 
                        name="restname" 
=======
                        value={formData.name} 
                        name="name" 
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
                        type="nome" required 
                        placeholder="Nome do estabelecimento"/>
                    <input 
                        onChange={handleinput} 
<<<<<<< HEAD
                        value={formData.restemail} 
                        name="restemail" 
=======
                        value={formData.email} 
                        name="email" 
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
                        type="Email" required 
                        placeholder="Email"/>
                    <input 
                        onChange={handleinput} 
<<<<<<< HEAD
                        value={formData.restpass}
                        name="restpass" 
=======
                        value={formData.password}
                        name="password" 
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
                        type="password" required 
                        placeholder="Senha" />
                    <input 
                        onChange={handleinput} 
<<<<<<< HEAD
                        value={formData.restadress} 
                        name="restadress" 
=======
                        value={formData.endereco} 
                        name="endereco" 
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
                        type="text" required 
                        placeholder="Endereço" />

                    <p>Categorias</p>

                    <ul>
                        {items.map(item => (
                            <li key={item.idcateg}
                                onClick={() => handleSelect(item.idcateg)}
<<<<<<< HEAD
                                className={restcateg.includes(item.idcateg)? 'selected': ''} >
=======
                                className={categorias.includes(item.idcateg)? 'selected': ''} >
>>>>>>> 11d959708a6f100bd0085b01ee5d53bfecefa0e3
                                {item.namecateg} 
                            </li>
                        ))}
                    </ul>

                    <button type="submit" className="button-form">Cadastrar</button>
                    <a className="sub" href="/login">já tem cadastro? arrocha o nó no login.</a>
                </form>
            </div>
        </div>
    )
}

export default CadastroR;