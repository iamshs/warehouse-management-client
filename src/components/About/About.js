import React from 'react';
import './About.css'
import thumb from '../../Images/large_thumbnail.jpg'

const About = () => {
    return (
        <div className='about'>
           <div>
               <img src={thumb} alt="" />
          </div> 
           <div>
               <h1>Who we are :</h1>
               <p> <span className='fw-bolder'>Motor House</span> is the leading-edge digital supply chain product engineering company that empowers businesses to ideate, plan, execute and manage their value chains for better optimization and fulfilment of their customer demands.
               Inventrax's Information Technology(IT) and Operation Technology(OT) convergence platform enables companies in achieving productivity, efficiency and traceability with lean manufacturing and distribution practices.With a decade of experience serving verticals including Aerospace, Pharmaceutical, Automobile, Food and Beverages, Fashion and Retail and the Governments. Inventrax built a digital supply chain product portfolio which includes</p>
          </div> 
        </div>
    );
};

export default About;