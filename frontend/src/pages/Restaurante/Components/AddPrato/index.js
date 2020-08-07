import React, { useState } from 'react';
import './styles.css'
import api from '../../../../api';

const AddPrato = () => {

    const [ formData, setFormData ] = useState({
        restid: localStorage.getItem('id'),
        name: '',
        price: '',
        description: '',
        image: null 
    })

    function handleClose(e){
        e.preventDefault()

        const div = document.querySelector('.add-prato');
        div.classList.remove('open');
    }

    function handleChange(e){

        const { name , value } = e.target;

        setFormData({...formData, [name]: value});
    }

    async function handleSubmit(e) {

        await api.post('foodCreate', formData);

    }

    return (

        <div className="add-prato">

            <div className="div">
                <div></div>
                <h5 className="x" onClick={handleClose}>X</h5>
                

            </div>

            <form onSubmit={handleSubmit}>

                <input type="text" name="name" autoComplete="off" required onChange={handleChange}placeholder="Nome do prato"/>
                <input type="float" name="price" autoComplete="off" required onChange={handleChange}placeholder="Preço"/>
                <input type="text" name="description" onChange={handleChange}placeholder="Descrição"/>

                <button type="submit">Cadastrar</button>

            </form>
        </div>

    );
}

export default AddPrato;