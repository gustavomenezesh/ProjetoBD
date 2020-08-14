import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Components/SideBar';
import api from '../../../api';
import CardRel from '../Components/cardRel';

const Relatorio = () => {

    const [ rel, setRel ] = useState([]);
    const [ qnt, setQnt ] = useState(0);
    const [ bool, setBool ] = useState(0);

    async function handleRel1(e) {

        e.preventDefault();
        SetShow(false);
        setBool(1);

        await api.get(`rel1?id=${localStorage.getItem('id')}`).then(response => {
            setRel([[response.data.food[0]]]);
            setQnt(response.data.qnt);
        })

        

        const div = document.querySelector('div.rels');
        div.classList.remove('nada');
        
    }
    const [ show, SetShow ] = useState(false);

    function handleShow(e){

        e.preventDefault();
        setRel([[]])
        SetShow(true);

    }

    async function handleRel2(e){

        if (e.target.value !== "0"){
            
            await api.get(`rel2?id=${localStorage.getItem('id')}&period=${Number(e.target.value)}`).then(response => {
                setRel([response.data]);
            })
            setBool(2);

        }

    }

    async function handleRel3(e) {

        e.preventDefault();
        SetShow(false);
        setBool(3);

        await api.get(`rel3?id=${localStorage.getItem('id')}`).then(response => {
            setRel([response.data]);
        })

        
        
        const h3 = document.querySelector('div.rels h3');

        if (rel.length === 0)
            h3.nodeValue = 'Não nada para ver aqui';
        const div = document.querySelector('div.rels');
        div.classList.remove('nada');
        
    }


    return (
        <div className="main">
            <Sidebar />
            <div className="main-content">

                <h1>Relatórios</h1>
                <div className="content">

                    <div className="buttons">
                        <button type="button" onClick={handleRel1} className="btn">Relatório 1</button>
                        <button type="button" onClick={handleShow} className="btn">Relatório 2</button>
                        <button type="button" onClick={handleRel3} className="btn">Relatório 3</button>
                    </div>
                    <div className="rels">
                        { show ? 
                        
                            <div className="period">
                                <select onChange={handleRel2} >
                                    <option  selected="selected" value="0">Selecione um período</option>
                                    <option value="1">1 dia atrás</option>
                                    <option value="7">1 semana atrás</option>
                                    <option value="30">1 mês atrás</option>
                                </select> 
                            </div>

                        : null}
                        <div className="nada">
                            {rel.length === 0 && show === false ? <h3>Selecione um Relatório para vizualizar</h3> :  rel[0].map(prato => (
                                <CardRel prato={prato} qnt={qnt} bool={bool}/>
                            )) }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Relatorio;