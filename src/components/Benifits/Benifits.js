import React from 'react';
import './Benifits.css'

const Benifits = () => {
    return (
        <div >
            <h1 className='card-title'> Benefits of Motor House </h1>
         <div className='card-container'>
         <div className='card'>
            <h3>
            Customer Satisfaction
            </h3>
            <p>Having the right product at the right time and place increases sales and allows companies to meet Service Level Agreements (SLAs) by reducing short ships, shipping errors, and missed deliveries.</p>
         </div> 
          <div className='card'>
            <h3>
            Lower Holding Costs
            </h3>
            <p>A lower cost per order, increased storage capacity within the centre, reduced freight costs, and improved service levels results in overall reduced fulfilment costs.</p>
         </div> 
          <div className='card'>
            <h3>
            Reduce Sales Returns
            </h3>
            <p>By implementing and automating smart pick process with Barcode, HHT, RFID and Voice you can now deliver on-time and accurate items, which will help reducing your returns.</p>
         </div> 
         </div>
            
        </div>
    );
};

export default Benifits;