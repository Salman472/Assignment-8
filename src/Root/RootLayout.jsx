import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    
    return (
        <div className=''>
            <Navbar/>
            <div className='min-h-[calc(100vh-305px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;