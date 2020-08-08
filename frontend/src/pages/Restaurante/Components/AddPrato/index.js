import React, { useState } from 'react';
import './styles.css'
import api from '../../../../api';

const AddPrato = () => {

    const [ formData, setFormData ] = useState({
        restid: localStorage.getItem('id'),
        name: '',
        price: '',
        description: ''
    })

    const data = new FormData();
    const [ productImage , setImage ] = useState('https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg')

    function handleClose(e){
        e.preventDefault()

        const div = document.querySelector('.add-prato');
        div.classList.remove('open');
    }

    function handleChange(e){

        const { name , value } = e.target;

        setFormData({...formData, [name]: value});
        console.log(formData);
    }

    function handleImage(e) {
        
        e.preventDefault();
        setImage(e.target.files[0]);

    }

    async function handleSubmit(e) {

        e.preventDefault();

        const { restid, name, price, description } = formData;

        data.append('restid', restid);
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);
        data.append('productImage', productImage);

        console.log(data);

        await api.post('foodCreate', data);

    }

    return (

        <div className="add-prato">

            <div className="div">
                <div></div>
                <h5 className="x" onClick={handleClose}>X</h5>
                

            </div>

            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImage}/>
                <input type="text" name="name" autoComplete="off" required onChange={handleChange} placeholder="Nome do prato"/>
                <input type="float" name="price" autoComplete="off" required onChange={handleChange} placeholder="Preço"/>
                <input type="text" name="description" onChange={handleChange} placeholder="Descrição"/>

                <button type="submit">Cadastrar</button>

            </form>
        </div>

    );
}

export default AddPrato;