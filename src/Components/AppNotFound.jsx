import React from 'react';
import AppError from '../assets/App-Error.png'
import { Link } from 'react-router';
import App from './App';
const AppNotFound = () => {
    return (
        <div>
            <div className='text-center mt-2  space-y-7'>
                <div className='flex justify-center'>
                    <img className='h-full w-[500px] flex justify-center' src={AppError} alt="" />
                </div>
                <h1 className='text-5xl font-semibold text-[#001931]'>OPPS!! APP NOT FOUND</h1>
                <p className='text-xl font-normal text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/' className='btn py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</Link>
            </div>
        </div>
    );
};

export default AppNotFound;