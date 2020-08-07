import React from 'react';
import User from '../pages/Usuario/Home';
import Rest from '../pages/Restaurante/Home';

const Path = () => {

    if (localStorage.getItem('type') === 'client'){
        return <User />
    }else if (localStorage.getItem('type') === 'restaurant') {
        return <Rest />
    } 
}

export default Path;