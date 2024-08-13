import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';

const Mainlayout = () => {
    return (
        <div>
            <div className='bg-site'>
                <Home></Home>
                <About></About>
                <Services></Services>
                <Work></Work>
                <Contact></Contact>
                <Footer></Footer>
                <Navbar></Navbar>
            </div>
            
        </div>
    );
};

export default Mainlayout;