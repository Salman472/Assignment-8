import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <div className=' flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;