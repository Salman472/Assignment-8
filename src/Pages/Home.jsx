import React from 'react';
import Phone from '../assets/hero.png'
import useApps from '../Hooks/useApps';
import App from '../Components/App';
import { Link, NavLink } from 'react-router';





const Home = () => {
   const [app,error,Loading]=useApps()
   console.log(app);
   const sliceApp=app.slice(0,8)
    return (
        <div>
          <div className='text-center mt-20 space-y-2 w-11/12 mx-auto'>
            <h1 className='text-7xl font-bold'>We Build</h1>
            <h2 className='text-7xl font-bold'><span className='font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-[#627382] text-xl font-normal w-8/12 mx-auto'>At CREATIVE APPS.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-5 flex justify-center gap-4'>
                <Link target='blank' to='https://play.google.com/store/games?hl=en' className='btn btn-outline border-gray-300'><img className='h-8 w-8 rounded-r-sm' src="https://i.ibb.co.com/TJbq64M/images-3.png" alt="" /> Google Play</Link>
                <Link to='https://www.apple.com/app-store/' target='blank' className='btn btn-outline border-gray-300'><img className='h-8 w-8' src="https://i.ibb.co.com/7Jz7JSVZ/App-Store-i-OS-svg.png" alt="" /> App Store</Link>
            </div>
           </div>
           <div className='flex justify-center'>
          <img className='' src="https://i.ibb.co.com/hJyK67cS/iphone.png" alt="" />
            {/* <img className='h-full' src={Phone} alt="" /> */}
           </div>
           <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white p-20 space-y-10'>
                <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-15 '>
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


           <div>
            <div className='text-center mt-20 mb-10 space-y-4'>
                <h1 className='text-5xl text-[#001931] font-bold'>Trending Apps</h1>
                <p className='text-xl text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto'>
                {
                    sliceApp.map(app=><App app={app} key={app.id}/>)
                }
            </div>

           </div>
           <div className='text-center mt-10 mb-20'>
            <NavLink to='/apps' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-4 px-20 rounded-sm shadow-lg'>Show All</NavLink>
           </div>
        </div>
    );
};

export default Home;