import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import AppNotFound from "./AppNotFound";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const AppDetails = () => {
  const [app] = useApps();
 
  const { id } = useParams();
  const [ins, setIns] = useState(false);
  const install = () => {
    setIns(true);
    toast.success("Install Successful!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // console.log(id);
  const singleApp = app.find((app) => app.id === Number(id));
  if (!singleApp) {
    return <AppNotFound />;
  }
  // console.log(singleApp.ratings);
  const rating=singleApp.ratings
  const reverseRating=[...rating].reverse()
  console.log(reverseRating);
  

  // rechart data
//   const data = [
//   {
//     name: '5 Star',
  
//     pv: 800,
    
//   },
//   {
//     name: '4 Star',
    
//     pv: 967,
    
//   },
//   {
//     name: '3 Star',
    
//     pv: 1098,
  
//   },
//   {
//     name: '2 Star',
   
//     pv: 1200,
    
//   },
//   {
//     name: '1 Star',
   
//     pv: 1108,
   
//   },
  
// ];


  return (
    <div className="w-11/12 mx-auto  mt-20">
      {/* {!singleApp?(<h1>Loading...</h1>):
            (singleApp.title)
            } */}
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
            className="btn py-4 px-5 mt-4 bg-[#00D390]  font-semibold text-white"
          >
            {ins ? "installed" : `Install Now (${singleApp?.size} MB) (&)`}
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
