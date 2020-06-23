import React, { useState, useEffect } from 'react';
import api from '../../api/connection';
import './styles.css';

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
    })

    const [ items, setItems ] = useState([]);

    useEffect(() => {

        api.get('categorias').then(response => {
            setItems(response.data);
        });
    }, []);

    function handleSelect(id){

        console.log(categorias);

        const alreadySelected = categorias.findIndex(item => item === id);

        if (alreadySelected >= 0){
            const itemFilter = categorias.filter(item => item !== id);
            setCategorias(itemFilter);
        }else {
            setCategorias([...categorias, id]);
        }

    }

    function handleinput(event){
        const { name, value } = event.target;

        setFormData({ ...formData, [name] : value});

    }

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
            });
    
            setCategorias([]);

        }else {
            alert('Selecione pelo menos uma categoria');
        }

    }

    return (

        <div className="geral-box">

            <span className="title">Cadastro Restaurante</span>

            <div className="form-box">

                <form className="form" onSubmit={handleSubmit}>

                    <input 
                        onChange={handleinput} 
                        value={formData.name} 
                        name="name" 
                        type="nome" required 
                        placeholder="Nome do estabelecimento"/>
                    <input 
                        onChange={handleinput} 
                        value={formData.email} 
                        name="email" 
                        type="Email" required 
                        placeholder="Email"/>
                    <input 
                        onChange={handleinput} 
                        value={formData.password}
                        name="password" 
                        type="password" required 
                        placeholder="Senha" />
                    <input 
                        onChange={handleinput} 
                        value={formData.endereco} 
                        name="endereco" 
                        type="text" required 
                        placeholder="Endereço" />

                    <p>Categorias</p>

                    <ul>
                        {items.map(item => (
                            <li key={item.idcateg}
                                onClick={() => handleSelect(item.idcateg)}
                                className={categorias.includes(item.idcateg)? 'selected': ''} >
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