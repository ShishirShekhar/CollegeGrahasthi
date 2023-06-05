import { Link } from "react-router-dom";
import test from "../../img/testImg.png";
import Button from "../Button";

const Sample = () => {
  return (
    <div className="h-screen text-black px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="relative w-full md:w-1/2">
          <img src={test} alt="test" className="shadow-xl rounded-3xl max-w-full h-auto" />
          <div className="absolute bg-gray-900 text-white pl-4 py-5 rounded-lg md:left-56 md:top-2/3 w-96">
            <h1 className="text-2xl">Mehar Apartment</h1>
            <p>Lawgate, Phagwara</p>
            <ul className="flex flex-wrap">
              <li className="pr-2"><span className="text-xl">·</span>Wifi</li>
              <li className="pr-2"><span className="text-xl">·</span>AC</li>
              <li className="pr-2"><span className="text-xl">·</span>Chair</li>
              <li className="pr-2"><span className="text-xl">·</span>Kitchen</li>
              <li className="pr-2"><span className="text-xl">·</span>Fir Security</li>
              <li className="pr-2"><span className="text-xl">·</span>Animal Friendly</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary"></div>
          <h1 className="text-5xl font-semibold pt-5 pr-36">Search best room through filter</h1>
          <p className="text-gray-300 text-lg font-semibold tracking-wider text-justify leading-9 py-8 pr-40">
            All our team are professional and competent in their fields and will help you realize your dream building with excellent result.
          </p>

          <div className="flex items-center">
            <div className="mr-4"><Button value="See all" to="/other" /></div>
            <Link to="/other" className="text-xl font-semibold">How it works →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
