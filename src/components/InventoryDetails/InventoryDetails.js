import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './inventoryDetails.css'

const InventoryDetails = () => {
    const {_id} = useParams()
    const [inventory,setInventory]= useState({})

    useEffect(()=>{
        const url = `http://localhost:4000/inventory/${_id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[])
    return (
        <div className='details-container'>
          <div>
             <img src= {inventory.img} alt="" />
          </div> 
          <div>
            <h1>{inventory.name}</h1>
            <p>{inventory.details}</p>
            <h3>Price:{inventory.price}</h3>
            <h5>Quantity:{inventory.quantity}</h5>
            <p><small><span className='fw-bolder'>ID:</span>{inventory._id}</small></p>
          </div>
          <button className='w-75'>Delivered</button>
          <button className='w-75'>Restock</button>
        </div>
    );
};

export default InventoryDetails;