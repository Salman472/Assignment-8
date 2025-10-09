import React, { Suspense, use, useState } from "react";
import useApps from "../Hooks/useApps";
import App from "../Components/App";
import AppNotFound from "../Components/AppNotFound";
import loadingLogo from '../assets/logo.png'

const Apps = () => {
  const [app, error, loading] = useApps();
  const [appFound,setAppFound]=useState('')
  const trem=appFound.trim().toLowerCase()
  const foundApp=trem?app.filter(a=>a.title.toLowerCase().includes(trem)):app
//   console.log(foundApp);
//  const navigation=useNavigation()
//  console.log(navigation.state);
//   console.log(app);
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20 text-center space-y-4">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-xl font-normal text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 mb-6">
        <h1 className="text-2xl font-semibold text-[#001931]">({foundApp.length}) Apps Found</h1>
        <label className="input">
          <svg
            className="h-[2em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={appFound} onChange={(e)=>setAppFound(e.target.value)} type="search" className="grow" placeholder="Search App" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>
      {
        loading?<h1 className="min-h-[calc(100vh-305px)] flex justify-center items-center gap-3 font-bold text-2xl md:text-5xl lg:text-7xl text-li bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "><img  className="h-20 w-20" src={loadingLogo} alt="" /> CREATIVE APPS.IO</h1>:<><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            foundApp.length>0 &&foundApp.map((app) => (
          <App key={app.id} app={app} />
        ))
        }
      </div>
      {
        foundApp.length===0 && <AppNotFound/>
      }</>
      }
      
    </div>
  );
};

export default Apps;
