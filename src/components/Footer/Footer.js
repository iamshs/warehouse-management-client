import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mb-1'>
         <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {year} <span className='fw-bolder'>
         Motor House
         </span>
        </footer>
    );
};

export default Footer;