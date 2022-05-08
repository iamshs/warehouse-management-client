import React from 'react';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Benifits from '../Benifits/Benifits';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Inventories/>
           <Benifits/>
           <About/>
        </div>
    );
};

export default Home;