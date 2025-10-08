import React from 'react';
import PageError from '../assets/error-404.png'
import { Link } from 'react-router';
const PageNotFound = () => {
    return (
        <div>
            <div className='text-center mt-2  space-y-7'>
                <div className='flex justify-center'>
                    <img className='h-full w-[500px] flex justify-center' src={PageError} alt="" />
                </div>
                <h1 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h1>
                <p className='text-xl font-normal text-[#627382]'>The page you are looking for is not available.</p>
                <Link to='/' className='btn py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</Link>
            </div>
        </div>
    );
};

export default PageNotFound;