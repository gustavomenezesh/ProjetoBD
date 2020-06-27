import React, { useState } from 'react';
import api from '../../api/connection';

import './styles.css';
import { useHistory } from 'react-router-dom';



const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    })

    function handleinput(event) {

        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

    }

    const history = useHistory();

    async function handleAuth(event) {

        event.preventDefault();

        const { email, pass } = formData;

        const requestData = {
            email,
            pass
        }

        setFormData({
            email: '',
            pass: ''
        })
        
        const responseData = await api.post("/login", requestData);

        const { data } = responseData;

        console.log(data[0]);

        if (data[0] !== []){
            localStorage.setItem('isAuth', true);
            localStorage.setItem('type', data[0].tipo);

            if (data[0].tipo === "restaurant"){
                localStorage.setItem('id', data[0].restid);
            }
            localStorage.setItem('id', data[0].clientid);
        }

        history.push('/home');


    }

    return (
        <div className="geral-box">

            <span className="title">Login</span>

            <div className="login-box">

                <form className="form" onSubmit={handleAuth}>
                    <input onChange={handleinput} value={formData.email} name="email" type="email" required placeholder="Email" />
                    <input onChange={handleinput} value={formData.pass} name="pass" type="password" required placeholder="Senha" />

     
                    <button type="submit" className="button-form" >Entrar</button>
                    <a className="sub" href="/corr">Ainda não tem login? Dale no cadastro</a>
                </form>

            </div>

        </div>
    );
}


export default Login;