import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Services from '../Services';


const Mainlayout = () => {
    return (
        <div className='bg-site'>
           
            <Home></Home>
            <About></About>
            <Services></Services>
            <Navbar></Navbar>
        </div>
    );
};

export default Mainlayout;