import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories,setInventories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/inventory')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])
    return (
       <div className='inv-container'>
           <div >
             <p className='inventories-head fw-bolder fs-3'>Our Brands and Types</p>
             <h1 className='inventories-title'>Choose Your <span>Best MotorBike</span></h1>
           </div>
           
           <div className='inventories'>
           {
               inventories.slice(0,6).map(inventory=> <Inventory 
                inventory={inventory}
                key={inventory._id}
                > </Inventory>)
           } 
        </div>
           
       </div>
    );
};

export default Inventories;