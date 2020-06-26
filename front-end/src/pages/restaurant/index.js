import React from 'react';
import { useHistory } from 'react-router-dom';

const Rest = () => {

    const history = useHistory();

    function handleLogout(e){
        e.preventDefault();

        localStorage.removeItem('type');
        localStorage.removeItem('isAuth');

        history.push('/');
    }

    return (
        <div className="test">
            <h1>restaurante</h1>
            <button type="button" onClick={handleLogout}>sair</button>
        </div>
        
    )
}

export default Rest;