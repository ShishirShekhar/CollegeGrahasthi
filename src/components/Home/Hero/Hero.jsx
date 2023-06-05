import React from "react";
import Nav from "./Nav";
import Search from "../../Search";

const Hero = () => {
  return (
    <div className="bg-heroImg bg-full text-white px-10 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-52">
      <div className="sm:px-12">
        <Nav />
        <div className="max-w-2xl">
          <div className="mt-16 md:mt-24 lg:mt-32">
            <h1 className="sm:text-5xl text-2xl font-extrabold leading-tight">
              All your accommodation needs at one place.
            </h1>
            <p className="mt-4 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              animi sequi voluptatum veritatis excepturi ducimus minus doloribus
              beatae tempora dolore.
            </p>
            <div className="mt-8 mx-auto">
              <Search value="Search by city name, area, or property" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
