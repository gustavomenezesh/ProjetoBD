import React, { useState } from 'react';
import './styles.css';

import api from '../../api/connection'


const Cadastro = () => {

    const [ formData, setFormData ] = useState({
        tipo: 'client',
        clientName: '',
        clientEmail: '',
        clientPass: '',
        clientAdress: ''
    })
    
    function handleinput(event){
        const { name, value } = event.target;

        setFormData({ ...formData, [name] : value});

    }

    async function handlesubmit(event) {


        event.preventDefault();

        const { tipo, clientName, clientEmail, clientAdress, clientPass} = formData;

        const data = {
            tipo,
            clientName, 
            clientEmail, 
            clientAdress, 
            clientPass
            
        }

        const client = await api.post("clientsCreate", data);
        console.log(client);
        
        setFormData({
            tipo: 'client',
            clientName: '',
            clientEmail: '',
            clientPass: '',
            clientAdress: ''
        })

    }

    return (

        <div className="geral-box">

            <span className="title">Cadastro Cliente</span>

            <div className="form-box">

                <form className="form" onSubmit={handlesubmit}>

                    <input value={formData.clientName} type="nome" required placeholder="Nome" name="clientName" onChange={handleinput}/>
                    <input value={formData.clientEmail} type="Email" required placeholder="Email" name="clientEmail" onChange={handleinput}/>
                    <input value={formData.clientPass} type="password" required placeholder="Senha" name="clientPass" onChange={handleinput}/>
                    <input value={formData.clientAdress} type="text" required placeholder="Endereço" name="clientAdress" onChange={handleinput}/>

                    <button type="submit" className="button-form">Cadastrar</button>
                    <a className="sub" href="/login">já tem cadastro? arrocha o nó no login.</a>

                </form>
            </div>
        </div>
    );
}

export default Cadastro;

