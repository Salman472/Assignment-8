import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
import NotInstall from "../Components/NotInstall";
import Swal from "sweetalert2";
const Installation = () => {
  const [save, setSave] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("installed"));
    if (savedData) {
      setSave(savedData);
    }
  }, []);
  const hendleRemove = (id) => {
  const saveitems = JSON.parse(localStorage.getItem("installed")) || [];
  const updatedList = saveitems.filter((p) => p.id !== id);
  setSave(updatedList);
  localStorage.setItem("installed", JSON.stringify(updatedList));

    Swal.fire({
  title: "App Uninstall Successfully!",
  icon: "success",
  draggable: true
});

  // toast.error(" App Uninstall Successfully!", {
  //   position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: false,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  // });
};

  const sortItem = (() => {
    if (sortOrder === "price-asc") {
      return [...save].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "price-des") {
      return [...save].sort((a, b) => b.size - a.size);
    } else {
      return save;
    }
  })();
  // if(sortItem.length===0){
  //   return <img src="https://i.ibb.co.com/BHvxrMFb/app-not-installed-error-in-android.webp"/>
  // }
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20 mb-10 text-center space-y-4">
        <h1 className="text-5xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-xl font-medium text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-semibold text-2xl text-[#001931]">
            <span className="text-3xl">({save.length})</span> Apps Found
          </h1>
          <div>
            <label className="form-control w-full max-w-[300px] ">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by Price</option>
                <option value="price-asc">Low-&gt;High</option>
                <option value="price-des">High-&gt;Low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="space-y-3 ">
          {
            save.length===0?<NotInstall/> :<>{sortItem.map((p) => (
            <div
              key={p.id}
              className="card card-side bg-base-100 shadow-lg  hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <div className="flex  justify-between items-center w-full p-4 rounded-lg">
                <figure>
                  <img
                    className="h-35 w-35 object-cover rounded-xs shadow-lg"
                    src={p.image}
                    alt={p.name}
                  />
                </figure>
                <div className="card-body">
                  <div>
                    <h2 className="card-title">{p.title}</h2>
                  <div className="flex  md:flex-row gap-4 items-center">
                    <div>
                      <p className=" flex items-center gap-1 text-xl font-medium text-[#00D390]">
                        <img className="h-4 w-4" src={download} alt="" />
                        {p.downloads}
                      </p>
                    </div>
                    <h1 className="flex items-center gap-1 text-xl text-[#FF8811] font-medium">
                      <img className="h-4 w-4" src={rating} alt="" />
                      {p.ratingAvg}
                    </h1>
                    <p className="text-xl text-[#627382] font-medium">
                      {p.size} MB
                    </p>
                  </div>
                    <div className="pr-3  sm:hidden  mt-4">
                  <button
                    onClick={() => hendleRemove(p.id)}
                    className="btn bg-[#00D390] text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
                  >
                    Uninstall
                  </button>
                
                </div>
                  </div>
                </div>
                <div className="pr-3 hidden sm:block  ">
                  <button
                    onClick={() => hendleRemove(p.id)}
                    className="btn bg-[#00D390] text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
                  >
                    Uninstall
                  </button>
                
                </div>
              </div>
            </div>
          ))}</>
          }
        </div>
      </div>
      <ToastContainer/>
    </div>

  );
  
};

export default Installation;
