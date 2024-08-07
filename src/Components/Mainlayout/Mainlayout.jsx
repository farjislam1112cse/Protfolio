import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';


const Mainlayout = () => {
    return (
        <div className='bg-site'>
           
            <Home></Home>
            <About></About>
            <Navbar></Navbar>
        </div>
    );
};

export default Mainlayout;