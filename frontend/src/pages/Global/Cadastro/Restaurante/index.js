import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import api from '../../../../api';

const CadastroRest = () => {

    const [ image, setimage ] = useState('https://avatars2.githubusercontent.com/u/41171735?s=460&u=5a307d5d50f636d5e18073c378cda7bd4a9dcd72&v=4');
    const [ URLimage, setURLiamge ] = useState('');
    const [ items, setItems ] = useState([]);
    const [ selectItems, setSelectedItems ] = useState([]);
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        adress: '',
        pass: '',
    })

    function handleChangeInput(e) {
        
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

    }

    
    function previewFile() {

        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        
        reader.onloadend = function () {
            preview.src = reader.result.replace("data:image/png;base64,", "");
            preview.src.replace("data:image/jpeg;base64,", "")
            preview.src.replace("data:image/bmp;base64,", "")
        }
        
        if (!file) {
            
            setimage(reader.readAsDataURL(file));
            setURLiamge(preview.src.replace("http://localhost:3000/", ""));
            
        } else {
            
            setimage('https://raw.githubusercontent.com/ViniciusSantos31/ProjetoBD/master/front-end/src/foto.png');
            
        }
        
        console.log(image);
        
    }
    
    async function handleSubmit(e) {

        e.preventDefault();

        const { name, email, pass, adress } = formData;
        const categ = selectItems;
        const image = image;

        const data = {
            name,
            email,
            adress,
            pass,
            categ,
            status: false,
            tipo: 'restaurant',
            image,
            entrega: true /* == entrega rapida */
        }

        console.log(data);

        await api.post('restaurantCreate', data);
    
    }
    useEffect(() => {

        api.get('categs').then(response => {
            setItems(response.data);
        });

    }, []);

    function handleSelectCateg(id){

        const alreadySelected = selectItems.findIndex(item => item === id);

        if (alreadySelected >= 0){
            const filteredCateg = selectItems.filter(item => item !== id);
            setSelectedItems(filteredCateg);
        } else {
            setSelectedItems([...selectItems, id]);
        }


    }

    return (
        
        <div className="content">

            <aside className="slogan">
                <h1 className="background">Oxe Food!</h1>
                <span>
                    Tá perdendo tempo abestado?<br /> 
                    Faz logo teu cadastro e vem<br />
                    fazer parte da família.
                </span>

            </aside>
            <form className="form-box" onSubmit={handleSubmit} >

                <h2>Cadastro</h2>

                <div className="image">
                    <img src={image} />
                    <div>
                        <h3>Logo do restaurante</h3>
                        <input type="file" id="file-id" onChange={previewFile}/>
                    </div>
                </div>

                <input type="name" name="name" onChange={handleChangeInput} placeholder="Nome" />
                <input type="email" name="email"  onChange={handleChangeInput} placeholder="Email" />
                <input type="password" name="pass"  onChange={handleChangeInput} placeholder="Senha" />
                <input type="name" name="adress"  onChange={handleChangeInput} placeholder="Endereço" />

                <h3>Categorias</h3>

                <ul className="ul">
                    {items.map(item => (
                        <li key={items.indexOf(item)}
                            onClick={() => handleSelectCateg(item.id)}
                            className={selectItems.includes(item.id)? 'selected' : ''}
                        >
                            {items[items.indexOf(item)].name} 
                        </li>
                    ))}
                </ul>

                <button type="submit">Cadastrar</button>
                <Link className="link" to="/">
                    Já tem cadastro? Arrocha o nó login.
                </Link>

            </form>
        </div>

    );
}

export default CadastroRest;