import React, { useState } from 'react';
import Modal from 'react-modal';

import CadastroRest from './Restaurante';
import CadastroClient from './User';

import './styles.css';

const Cadastro = () => {

    const [ modalOpen, setmodalOpen ] = useState(true)
    const [ typeCadastro, settypeCadastro ] = useState("");

    function handleOption(e){

        settypeCadastro(e.target.name)
        setmodalOpen(false);

    }

    return (

         <div className="content" >
            <Modal className="modal" isOpen={modalOpen} ariaHideApp={false}>
                <h2>Cadastrar como:</h2>
                <button type="submit" name="cliente" onClick={handleOption}>Cliente</button>
                <button type="submit" name="restaurante" onClick={handleOption}>Restaurante</button>
            </Modal>
            {typeCadastro === "cliente" ? <CadastroClient /> : <CadastroRest />}
         </div>

    );
}

export default Cadastro;