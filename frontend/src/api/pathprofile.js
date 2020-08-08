import React from 'react';
import ProfileClient from '../pages/Usuario/Profile';
import ProfileRestaurant from '../pages/Restaurante/Profile';

const PathProfile = () => {

    if (localStorage.getItem('type') === 'client'){
        return <ProfileClient />
    }else if (localStorage.getItem('type') === 'restaurant') {
        return <ProfileRestaurant />
    } 
}

export default PathProfile;