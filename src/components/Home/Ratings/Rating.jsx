import React from "react";
import profile from "../../../img/profile.jpg";

const Rating = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm w-full sm:w-80 py-8 px-6 mb-4 sm:mb-0">
      <div className="text-secondary text-lg">★★★★★</div>
      <div className="py-4 text-gray-600 font-semibold tracking-wider leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, dolorem ex unde nemo a velit nobis nesciunt cupiditate voluptas dolor!</div>
      <div className="py-4 flex items-start sm:items-center">
        <img src={profile} alt="profile" className="rounded-full w-10 h-10 mr-4" />
        <div>
          <p className="font-bold">Shishir Shekhar</p>
          <p className="text-gray-700 text-sm">Location</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
