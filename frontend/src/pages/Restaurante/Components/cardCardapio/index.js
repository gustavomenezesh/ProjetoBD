import React, { useState } from 'react';
import './styles.css';
import api from '../../../../api';

const CardCardapio = ({ prato }) => {

    const [ info, setInfo ] = useState({
        id: prato.id,
        name: prato.name,
        restid: localStorage.getItem('id'),
        price: prato.price,
        description: prato.description
    })

    async function Edit(name){


        const h3 = document.querySelector(`div[id = "${name}"] h3`);
        const span1 = document.querySelector(`div[id = "${name}"] span.price`);
        const span2 = document.querySelector(`div[id = "${name}"] span.desc`);
        const button = document.querySelector(`div[id = "${name}"] .edit`);
        const nameInput = document.querySelector(`div[id = "${name}"] input[name = name]`);
        const priceInput = document.querySelector(`div[id = "${name}"] input[name = price]`);
        const descInput = document.querySelector(`div[id = "${name}"] input[name = description]`);

        if (button.textContent !== 'Salvar'){

            button.textContent = 'Salvar'

            nameInput.classList.add('open');
            priceInput.classList.add('open');
            descInput.classList.add('open');

            
            h3.classList.add('close');
            span1.classList.add('close');
            span2.classList.add('close');
            
        }else {
            
            
            nameInput.classList.remove('open');
            priceInput.classList.remove('open');
            descInput.classList.remove('open');
        
            await api.post('foodUpdate', info);

                
            button.textContent = 'Editar'
        
            h3.classList.remove('close');
            span1.classList.remove('close');
            span2.classList.remove('close');


        }


    }

    async function handleDelete(id) {

        await api.delete(`foodDelete/${id}`);

    }

   

    function handleChange(e) {

        const { name, value } = e.target;

        setInfo({...info, [name]: value})

        console.log(info)
    }

    return (
            <div className="card" id={prato.name}>
                <img src={prato.image === null ? "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png" : prato.image} alt="imagem prato" />
                <h3>{prato.name}</h3>
                <span className="price">R$ {prato.price}</span>
                <span className="desc">{prato.description}</span>
                <input type="text" placeholder="Nome do prato" name="name" onChange={handleChange} value={info.name}/>
                <input type="number" placeholder="Preço" name="price" onChange={handleChange} value={info.price}/>
                <input type="text" placeholder="Descrição" name="description" onChange={handleChange} value={info.description}/>

                <button className="edit" type="submit" onClick={() => Edit(prato.name)} >Editar</button>
                <button type="button" onClick={() => handleDelete(prato.id)}>Remover</button>
            </div>

    );
}

export default CardCardapio;