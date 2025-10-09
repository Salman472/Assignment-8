import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import AppNotFound from "./AppNotFound";
import { useState } from "react";
import {  ToastContainer } from "react-toastify";
import Img from '../assets/logo.png'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MoveLeft, MoveRight } from "lucide-react";
import Swal from "sweetalert2";
const AppDetails = () => {
  const [app,err,loading] = useApps();
//  console.log(loading);
  const { id } = useParams();
  const [ins, setIns] = useState(false);
  

 useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
    const isInstalled = installedApps.some(ap => ap.id === app.id);
    setIns(isInstalled);
  }, [app]);

  const singleApp = app.find((app) => app.id === Number(id));
  if (!singleApp) {
    
    return loading?<h1 className="min-h-[calc(100vh-305px)] flex justify-center items-center gap-3 font-bold text-2xl md:text-5xl lg:text-7xl text-li bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "><img className="h-20 w-20" src={Img} alt="" /> CREATIVE APPS.IO</h1>:<AppNotFound />;
  }
  // console.log(singleApp.ratings);
  const rating=singleApp.ratings
  const reverseRating=[...rating].reverse()
  // console.log(reverseRating);
  
const install = () => {
  const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
   const alreadyInstalled = installedApps.some(app => app.id === singleApp.id);
 if (alreadyInstalled) {
      alert("Already installed!");
      return;
    }
const updatedApps = [...installedApps, singleApp];
    localStorage.setItem("installed", JSON.stringify(updatedApps));

    setIns(true);


Swal.fire({
  title: `Yaheo 🔰 !! ${singleApp.title} Installed Successfully`,
  icon: "success",
  draggable: true
});
//  toast.success(`Yaheo 🔰 !! ${singleApp.title} Installed Successfully`, {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });

    const existingData=JSON.parse(localStorage.getItem("installed"))
    let updateData=[]
    if(existingData){
      const isDuplicate=existingData.some(a=>a.id===singleApp.id)
      if(isDuplicate){return}
      updateData=[...existingData,singleApp]
    }else{
      updateData.push(singleApp)
    }
     localStorage.setItem('installed', JSON.stringify(updateData))
   
    
   
    
  };
 

  return (
    
    <div className="w-11/12 mx-auto  mt-20">
      <div className="mb-5 -mt-15 lg:hidden flex justify-between items-center " >
        <Link to='/apps' className="btn shadow-lg bg-white"><MoveLeft/></Link>
        <Link to='/installation' className="btn  shadow-lg bg-white"><MoveRight/></Link>
      </div>
      <div className=" flex flex-col md:flex-row gap-10 border-b-2 border-gray-300 pb-10">
        <div>
          <img
            className="h-[350px]"
            src={singleApp?.image}
            alt={singleApp?.alt}
          />
        </div>
        <div className="flex-1">
          <div className="space-y-4 mt-2 ">
            <h1 className="text-3xl font-bold text-[#001931]">
              {singleApp?.title}
            </h1>
            <h3 className="pb-10 border-b-2 border-gray-300 text-xl">
              Developed by{" "}
              <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {singleApp?.companyName}
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-10 mt-8 ">
            <div className="space-y-4">
              <img src={download} alt="" />
              <h4>Downloads</h4>
              <h1 className="text-4xl font-extrabold">
                {singleApp?.downloads}
              </h1>
            </div>
            <div className="space-y-4">
              <img src={star} alt="" />
              <h4>Average Ratings</h4>
              <h1 className="text-4xl font-extrabold">
                {singleApp?.ratingAvg}
              </h1>
            </div>
            <div className="space-y-4">
              <img src={review} alt="" />
              <h4>Total Reviews</h4>
              <h1 className="text-4xl font-extrabold">{singleApp?.reviews}</h1>
            </div>
          </div>
          <button
            onClick={install}
            // disabled={}
            className="btn py-4 px-5 mt-4 bg-[#00D390]  font-semibold text-white shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
          >
            {ins ? "installed" : `Install Now (${singleApp?.size} MB)`}
            
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <div className="mt-10 pb-10 border-b-2 border-gray-300">
        <h1 className="text-2xl font-semibold text-[#001931]">Ratings</h1>
        <div className="h-80">
   

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={reverseRating}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
          {/* <Line dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <h1 className="text-2xl font-semibold">Description</h1>
        <p>
          {
            singleApp?.description
          }
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
