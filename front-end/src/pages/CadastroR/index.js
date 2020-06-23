import React, { useState, useEffect } from 'react';
import api from '../../api/connection';
import './styles.css';

const CadastroR = () => {

    const [ restcateg, setCategorias ] = useState([]);
    const [ formData, setFormData ] = useState({
        tipo: 'restaurant',
        status: false,
        restname: '',
        restemail: '',
        restpass: '',
        restadress: '',
    })

    const [ items, setItems ] = useState([]);

    useEffect(() => {

        api.get('categorias').then(response => {
            setItems(response.data);
        });
    }, []);

    function handleSelect(id){

       

        const alreadySelected = restcateg.findIndex(item => item === id);

        if (alreadySelected >= 0){
            const itemFilter = restcateg.filter(item => item !== id);
            setCategorias(itemFilter);
        }else {
            setCategorias([...restcateg, id]);
        }

    }

    function handleinput(event){
        const { name, value } = event.target;

        setFormData({ ...formData, [name] : value});

    }

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
                        value={formData.restname} 
                        name="restname" 
                        type="nome" required 
                        placeholder="Nome do estabelecimento"/>
                    <input 
                        onChange={handleinput} 
                        value={formData.restemail} 
                        name="restemail" 
                        type="Email" required 
                        placeholder="Email"/>
                    <input 
                        onChange={handleinput} 
                        value={formData.restpass}
                        name="restpass" 
                        type="password" required 
                        placeholder="Senha" />
                    <input 
                        onChange={handleinput} 
                        value={formData.restadress} 
                        name="restadress" 
                        type="text" required 
                        placeholder="Endereço" />

                    <p>Categorias</p>

                    <ul>
                        {items.map(item => (
                            <li key={item.idcateg}
                                onClick={() => handleSelect(item.idcateg)}
                                className={restcateg.includes(item.idcateg)? 'selected': ''} >
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