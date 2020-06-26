import React from 'react';
import User from '../pages/user';
import Rest from '../pages/restaurant';

const Path = () => {

    if (localStorage.getItem('type') === 'client'){
        return <User />
    }else if (localStorage.getItem('type') === 'restaurant') {
        return <Rest />
    }
}

export default Path;