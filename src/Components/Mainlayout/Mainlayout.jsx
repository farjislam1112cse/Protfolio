import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Work from '../Work';
import Contact from '../Contact';


const Mainlayout = () => {
    return (
        <div className='bg-site'>
           
            <Home></Home>
            <About></About>
            <Services></Services>
            <Work></Work>
            <Contact></Contact>
            <Navbar></Navbar>
        </div>
    );
};

export default Mainlayout;