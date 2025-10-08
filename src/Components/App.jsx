import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { Link } from "react-router";
const App = ({ app }) => {
  const { title, ratingAvg, downloads, image, alt,id } = app;
  console.log(app);

  return (
    <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out duration-500">
        <figure className="h-52 w-full p-4 rounded-xs">
          <img className="h-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <div className="rounded-sm py-[6px] px-[10px] text-[#00D390] bg-[#F1F5E8] flex items-center gap-2">
              <img className="h-5 w-5" src={download} alt={alt} />
              {downloads}
            </div>
            <div className="rounded-sm py-[6px] px-[10px] text-[#FF8811]  bg-[#FFF0E1] flex items-center gap-2">
              <img className="h-5 w-5" src={star} alt={alt} />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
