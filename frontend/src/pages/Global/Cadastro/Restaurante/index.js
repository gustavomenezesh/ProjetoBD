import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const categorias = [
    'Chinesa/Japonesa',
    'FastFood',
    'Sobremesa',
    'Hamburguers',
    'Pizza',
    'Açaí',
    'Comida Caseira',
    'Sabduiches',
    'Italiana',
    'Bebidas'
]

const CadastroRest = () => {

    const [ image, setimage ] = useState('https://raw.githubusercontent.com/ViniciusSantos31/ProjetoBD/master/front-end/src/foto.png');
    const [ URLimage, setURLiamge ] = useState('');

    function previewFile() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result.replace("data:image/png;base64,", "");
          preview.src.replace("data:image/jpeg;base64,", "")
          preview.src.replace("data:image/bmp;base64,", "")
        }

        if (file) {

            setimage(reader.readAsDataURL(file));
            setURLiamge(preview.src.replace("http://localhost:3000/", ""));

        } else {

          setimage('https://raw.githubusercontent.com/ViniciusSantos31/ProjetoBD/master/front-end/src/foto.png');

        }

        console.log(URLimage);

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
            <form className="form-box">

                <h2>Cadastro</h2>

                <div className="image">
                    <img src={image} />
                    <div>
                        <h3>Logo do restaurante</h3>
                        <input type="file" id="file-id" onChange={previewFile}/>
                    </div>
                </div>

                <input type="name" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="name" placeholder="Endereço" />

                <h3>Categorias</h3>

                <ul className="ul">
                    {categorias.map(item => (
                        <li key={categorias.indexOf(item)}>
                            {categorias[categorias.indexOf(item)]} 
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