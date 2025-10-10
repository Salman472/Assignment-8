import React from 'react';
import { NavLink } from 'react-router';

const NotInstall = () => {
    return (
        
        <div>
            <img className=" flex justify-center items-center w-screen " src="https://i.ibb.co.com/BHvxrMFb/app-not-installed-error-in-android.webp"/>
            <div className="text-center flex justify-center items-center mt-10 mb-20  hover:scale-105 transition-all duration-500 ease-in-out">
       
        <NavLink
          to="/apps"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-4 px-20 rounded-sm shadow-lg"
        >
        Back To Download App     
        </NavLink>
      </div>
        </div>
    );
};

export default NotInstall;
