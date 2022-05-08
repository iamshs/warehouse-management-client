import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'


const Inventory = ({inventory}) => {
    const {name,details,img,price,_id,quantity}=inventory
    const navigate = useNavigate()
    const navigateToDetails = _id=>{
      navigate(`/inventory/${_id}`)
    }
    return (
       <div>
          <div className='inventory-container'>
            <div className='inventory-img'>
              <img src={img} alt="" />
            </div>

        <div>
           <h2>{name}</h2>
           <p>{details}</p>
           <h3>Price:${price}</h3>
           <h5>Quantity:{quantity}</h5>
           <hr/>
           <button className='update-btn fw-bolder' onClick={()=>navigateToDetails(_id)}>Update</button>
         
         </div>   
        </div>
       
       </div>
    );
};

export default Inventory;