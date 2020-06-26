import React, { useState, useEffect } from 'react';
import './stylecardrest.css';

const Cardrest = ( { data } ) => {

    const [ status, setStatus ] = useState('')

    useEffect(() => {
        if ( data.status === false ) {
            setStatus('Fechado');
        }else {
            setStatus('Aberto');
        }
    }, []);

    return (

        <div className="card">

            <div className="desc">

                <p className="title-second title-card">{data.restname}</p>
                <p className={data.status ? 'open' : 'closed'}>{status}</p>
                <span className="sub desc">O restaurnte da vovó tem aquela comida gostosa da vovó</span>

            </div>

            <div className="top">
            
                <p className="frete">Frete Grátis</p>

            </div>

        </div>

    );
}

export default Cardrest;