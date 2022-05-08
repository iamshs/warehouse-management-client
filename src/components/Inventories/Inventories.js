import React from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const Inventories = () => {
    const [inventories] = useInventories()
    
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
        <div className='my-5 pb-2 text-center pe-2'>
        <Link className='text-decoration-none fw-bolder text-center text-white w-75 detail-btn px-2 py-2' to={'/manage'}>Manage Inventories</Link>
        </div>   
       </div>
    );
};

export default Inventories;