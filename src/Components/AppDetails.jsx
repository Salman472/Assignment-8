import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
const AppDetails = () => {
  const [app] = useApps();
  const { id } = useParams();
  // console.log(id);
  const singleApp = app.find((app) => app.id === Number(id));
  console.log(singleApp);
//   const {
//     image,
//     alt,
//     companyName,
//     description,
//     downloads,
//     ratingAvg,
//     reviews,
//     size,
//     title,
//   } = singleApp;

  return (
    <div className="w-11/12 mx-auto  ">
      {/* {!singleApp?(<h1>Loading...</h1>):
            (singleApp.title)
            } */}
      <div className="flex gap-10 border-b-2 border-gray-300 pb-10">
        <div>
            <img className="h-[300px]" src={singleApp?.image} alt={singleApp?.alt} />
        </div>
        <div className="flex-1">
            <div className=" ">
                <h1>{singleApp?.title}</h1>
            <h3 className="pb-10 border-b-2 border-gray-300">Developed by {singleApp?.companyName}.</h3>
            </div>
            <div className="flex items-center gap-6">
                <div>
                    <img src={download} alt="" />
                    <h4>Downloads</h4>
                    <h1>{singleApp?.downloads}</h1>
                </div>
                <div>
                    <img src={star} alt="" />
                    <h4>Average Ratings</h4>
                    <h1>{singleApp?.ratingAvg}</h1>
                </div>
                <div>
                    <img src={review} alt="" />
                    <h4>Total Reviews</h4>
                    <h1>{singleApp?.reviews}</h1>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default AppDetails;
