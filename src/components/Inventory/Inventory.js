import React from 'react';

const Inventory = ({inventory}) => {
    const {name,details,img,price}=inventory
    return (
        <div className='inventory-container'>
            <div>
              <img src={img} alt="" />
            </div>

        <div>
           <h2>{name}</h2>
           <p>{details}</p>
           <h3>Price:{price}</h3>
         
         </div>   
        </div>
    );
};

export default Inventory;