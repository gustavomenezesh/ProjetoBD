import React, { useState } from 'react';
import './styles.css'
import api from '../../../../api';
import { useHistory } from 'react-router-dom';

const AddPrato = () => {

    const data_food = new FormData();
    const [ formData, setFormData ] = useState({
        restid: localStorage.getItem('id'),
        name: '',
        price: '',
        description: ''
    })
    const [ productImage, setImage ] = useState('https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg')
    const history = useHistory()


    function handleClose(e){
        e.preventDefault()

        const div = document.querySelector('.add-prato');
        div.classList.remove('open');
    }

    function handleChange(e){

        const { name, value } = e.target;

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

        data_food.append('restid', restid);
        data_food.append('name', name);
        data_food.append('price', price);
        data_food.append('description', description);
        data_food.append('productImage', productImage);

        console.log(productImage);

        await api.post('foodCreate', data_food);

        const div = document.querySelector('.add-prato');
        div.classList.remove('open');

        setFormData({
            restid: localStorage.getItem('id'),
            name: '',
            price: '',
            description: ''
        })

    }

    return (

        <div className="add-prato">

            <div className="div">
                <div></div>
                <h5 className="x" onClick={handleClose}>X</h5>
                

            </div>

            <form onSubmit={handleSubmit} id="add">
                <input type="file" name="uploadFile" onChange={handleImage} />
                <input type="text" name="name" autoComplete="off" required onChange={handleChange} placeholder="Nome do prato"/>
                <input type="float" name="price" autoComplete="off" required onChange={handleChange} placeholder="Preço"/>
                <input type="text" name="description" onChange={handleChange} placeholder="Descrição"/>

                <button type="submit">Cadastrar</button>

            </form>
        </div>

    );
}

export default AddPrato;