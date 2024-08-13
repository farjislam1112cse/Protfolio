import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <div className='bg-site'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;