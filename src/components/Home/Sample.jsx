import { Link } from "react-router-dom";
import test from "../../img/testImg.png";
import Button from "../Button";

const Sample = () => {
  return (
    <div className="min-h-screen text-black px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="relative w-full md:w-1/2">
          <img src={test} alt="test" className="shadow-xl rounded-3xl max-w-full h-auto" />
          <div className="relative sm:absolute bg-gray-900 text-white pl-4 py-5 rounded-lg md:left-1/4 top-2/3 md:top-2/3 md:w-80 lg:w-96 transform translate-y-1/2 md:-translate-y-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">Mehar Apartment</h1>
            <p>Lawgate, Phagwara</p>
            <ul className="flex flex-wrap">
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>Wifi</li>
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>AC</li>
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>Chair</li>
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>Kitchen</li>
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>Fir Security</li>
              <li className="pr-2"><span className="text-xl md:text-2xl lg:text-3xl">·</span>Animal Friendly</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary my-8 md:my-0"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold pt-5 md:pr-16">Search for the best room with filters</h1>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-semibold tracking-wide text-justify leading-7 py-8 md:pr-24 lg:pr-40">
            All our team members are professionals in their fields and will help you find the perfect room that matches your requirements.
          </p>

          <div className="flex items-center">
            <div className="mr-4"><Button value="See all" to="/other" /></div>
            <Link to="/other" className="text-xl md:text-2xl font-semibold">How it works →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
