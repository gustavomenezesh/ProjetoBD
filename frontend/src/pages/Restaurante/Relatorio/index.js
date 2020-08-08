import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Components/SideBar';
import api from '../../../api';
import CardRel from '../Components/cardRel';

const Relatorio = () => {

    const [ rel, setRel ] = useState([]);
    const [ qnt, setQnt ] = useState(0);

    async function handleRel1(e) {

        e.preventDefault();

        await api.get(`rel1?id=${localStorage.getItem('id')}`).then(response => {
            setRel([[response.data.food[0]]]);
            setQnt(response.data.qnt);
        })

        const div = document.querySelector('div.rels');
        div.classList.remove('nada');
        
    }

    async function handleRel3(e) {

        e.preventDefault();

        await api.get(`rel3?id=${localStorage.getItem('id')}`).then(response => {
            setRel([response.data]);
        })
        

        const div = document.querySelector('div.rels');
        div.classList.remove('nada');
        
    }
    
    console.log(rel.length);
    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <h1>Relatórios</h1>
                <div className="content">

                    <div className="buttons">
                        <button type="button" onClick={handleRel1} className="btn">Relatório 1</button>
                        <button type="button" onClick={handleRel1} className="btn">Relatório 2</button>
                        <button type="button" onClick={handleRel3} className="btn">Relatório 3</button>
                    </div>
                    <div className="rels nada">
                    
                        {rel.length === 0 ? <h3>Selecione um Relatório para vizualizar</h3> :  rel[0].map(prato => (
                            <CardRel prato={prato} qnt={qnt}/>
                        )) }

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Relatorio;