import React from "react";
import Rating from "./Rating";

const Ratings = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 sm:px-6 lg:px-20 py-20">
      <div className="flex flex-col w-full max-w-screen-lg mx-auto">
        <div className="py-10">
          <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary"></div>
          <h1 className="text-4xl sm:text-5xl font-semibold w-full pt-5 pr-8 sm:pr-24">
            What students say about us
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
