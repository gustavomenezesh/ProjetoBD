import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../styles.css';
import api from '../../../../api';

const CadastroClient = () => {

    const [ productImage, setImage ] = useState('https://avatars2.githubusercontent.com/u/41171735?s=460&u=5a307d5d50f636d5e18073c378cda7bd4a9dcd72&v=4');
    const history = useHistory();
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        adress: '',
        pass: '',
        image: ''
    })
    const data = new FormData();

    function handleChangeInput(e) {
        
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

    }

    function handleImage(e) {
        
        e.preventDefault();
        setImage(e.target.files[0]);

    }
    
    async function handleSubmit(e) {

        e.preventDefault();

        const { name, email, pass, adress } = formData;

        data.append('name', name);
        data.append('email', email);
        data.append('adress', adress);
        data.append('pass', pass);
        data.append('tipo', 'client');
        data.append('productImage', productImage);

        console.log(data);

        await api.post('clientsCreate', data);
        history.push('/')

        setFormData({
            name: '',
            email: '',
            adress: '',
            pass: '',
        })
    
    }

    return (
        
        <div className="content">

            <aside className="slogan">
                <h1 className="background">Oxe Food!</h1>
                <span>
                    Tá perdendo tempo abestado?<br />
                    Faz logo teu cadastro e vem<br />
                    aproveitar os melhores <br />
                    restaurantes da região.
                </span>

            </aside>
            <form className="form-box" onSubmit={handleSubmit} >

                <h2>Cadastro</h2>

                <div className="image">
                    <img alt="avatar" src={formData.image} />
                    <div>
                        <h3>Foto do perfil</h3>
                        <input type="file" name="uploadFile" onChange={handleImage} />
                    </div>
                </div>

                <input type="name" name="name" onChange={handleChangeInput} value={formData.name}placeholder="Nome" />
                <input type="email" name="email" onChange={handleChangeInput} value={formData.email}placeholder="Email" />
                <input type="password" name="pass" onChange={handleChangeInput} value={formData.pass}placeholder="Senha" />
                <input type="name" name="adress" onChange={handleChangeInput} value={formData.adress}placeholder="Endereço" />

                <button type="submit" >Cadastrar</button>
                <Link className="link" to="/">
                    Já tem cadastro? Arrocha o nó login.
                </Link>

            </form>
        </div>

    );
}

export default CadastroClient;