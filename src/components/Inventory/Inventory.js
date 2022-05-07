import React from 'react';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const {name,details,img,price}=inventory
    return (
        <div className='inventory-container'>
            <div className='inventory-img'>
              <img src={img} alt="" />
            </div>

        <div>
           <h2>{name}</h2>
           <p>{details}</p>
           <h3>Price:{price}</h3>

           <hr/>
           <button className='update-btn fw-bolder'>Update</button>
         
         </div>   
        </div>
    );
};

export default Inventory;