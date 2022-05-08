import React from 'react';
import notfound from '../../Images/not.webp'

const NotFound = () => {
    return (
        <div>
         <img className='d-block mx-auto' src={notfound} alt="" />   
        </div>
    );
};

export default NotFound;