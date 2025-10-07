import React from 'react';
import Phone from '../assets/hero.png'

const Home = () => {
    return (
        <div>
           <div className='text-center mt-20 space-y-2 w-11/12 mx-auto'>
            <h1 className='text-7xl font-bold'>We Build</h1>
            <h2 className='text-7xl font-bold'><span className='font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-[#627382] text-xl font-normal w-8/12 mx-auto'>At CREATIVE APPS.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-5 flex justify-center gap-4'>
                <button className='btn btn-outline border-gray-300'><img className='h-8 w-8 rounded-r-sm' src="https://i.ibb.co.com/TJbq64M/images-3.png" alt="" /> Google Play</button>
                <button className='btn btn-outline border-gray-300'><img className='h-8 w-8' src="https://i.ibb.co.com/7Jz7JSVZ/App-Store-i-OS-svg.png" alt="" /> App Store</button>
            </div>
           </div>
           <div className='flex justify-center'>
          <img className='' src="https://i.ibb.co.com/hJyK67cS/iphone.png" alt="" />
            {/* <img className='h-full' src={Phone} alt="" /> */}
           </div>
           <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white p-20 space-y-10'>
                <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center items-center gap-15 '>
                    <div className='space-y-4'>
                        <p>Total Downloads</p>
                    <h1 className='text-6xl font-black'>29.6M</h1>
                    <p>21% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <p>Total Reviews</p>
                        <h1 className='text-6xl font-black'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <p>Active Apps</p>
                        <h1 className='text-6xl font-black'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Home;