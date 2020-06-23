import React, { useState } from 'react';
import './styles.css';

import api from '../../api/connection'


const Cadastro = () => {

    const [ formData, setFormData ] = useState({
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

        const {clientName, clientEmail, clientAdress, clientPass} = formData;

        const data = {
            clientName, 
            clientEmail, 
            clientAdress, 
            clientPass
        }

        console.log(data);
        const client = await api.post("clientsCreate", data);
        console.log(client);


    }

    return (

        <div className="geral-box">

            <span className="title">Cadastro Cliente</span>

            <div className="form-box">

                <form className="form" onSubmit={handlesubmit}>

                    <input type="nome" required placeholder="Nome" name="clientName" onChange={handleinput}/>
                    <input type="Email" required placeholder="Email" name="clientEmail" onChange={handleinput}/>
                    <input type="password" required placeholder="Senha" name="clientPass" onChange={handleinput}/>
                    <input type="text" required placeholder="Endereço" name="clientAdress" onChange={handleinput}/>

                    <button type="submit" className="button-form">Cadastrar</button>
                    <a className="sub" href="/login">já tem cadastro? arrocha o nó no login.</a>

                </form>
            </div>
        </div>
    );
}

    //988659605

export default Cadastro;
