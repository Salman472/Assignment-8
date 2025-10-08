import React from "react";
import { Link, NavLink } from "react-router";
import LogoImg from '../assets/logo.png'
const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#632EE3] lg:border-b-2 lg:border-[#632EE3] pb-1 transition-all easy-in-out duration-300 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white lg:bg-none lg:text-[#632EE3]"
      : " hover:text-[#632EE3] pb-1 transition-all easy-in-out duration-300";
  
  

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3 font-medium text-xl"
            >
             <NavLink  className={linkStyle} to="/"> <li className="ml-5">Home</li></NavLink> 
             <NavLink  className={linkStyle} to="/apps"> <li className="ml-5">Apps</li></NavLink> 
             <NavLink  className={linkStyle} to="/installation"> <li className="ml-5">Installation</li></NavLink> 
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="h-10 w-10" src={LogoImg} alt="" />
            <Link to='/' className="font-bold  text-xl text-li bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  ">CREATIVE APPS.IO</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium space-x-5 text-xl ">
              <NavLink  className={linkStyle} to="/"> <li className=" hover:scale-105 transition-all duration-500 ease-in-out">Home</li></NavLink> 
             <NavLink  className={linkStyle} to="/apps"> <li className=" hover:scale-105 transition-all duration-500 ease-in-out">Apps</li></NavLink> 
             <NavLink  className={linkStyle} to="/installation"> <li className=" hover:scale-105 transition-all duration-500 ease-in-out">Installation</li></NavLink>
            
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='https://github.com/' target="blank"  className="btn py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-105 transition-all duration-500 ease-in-out"><img className="h-8 w-8" src="https://i.ibb.co.com/F4dM6B7K/Github-desktop-logo-symbol-svg.png" alt="" /> Contribute</Link>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
