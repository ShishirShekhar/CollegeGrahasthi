import { Link } from "react-router-dom";
import Stat from "./Stat";

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
      <div>
        <Stat />
      </div>

      <div className="md:w-1/2 md:pr-16 lg:pr-40">
        <h1 className="text-4xl font-semibold leading-relaxed mb-8">
          We are providing one of the best rooms for students
        </h1>
        <p className="leading-7 mb-12 text-gray-800">
          Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
        </p>

        <div>
          <div className="flex items-center mb-4">
            <span className="pr-2 text-green-500">✅</span>
            <div className="font-semibold">
              Unlimited design possibilities
            </div>
          </div>
          <div className="flex items-center">
            <span className="pr-2 text-green-500">✅</span>
            <div className="font-semibold">
              Completely responsive features
            </div>
          </div>
        </div>

        <Link to="/other">
          <p className="py-8 font-semibold text-sky-500">Explore more →</p>
        </Link>
      </div>
    </div>
  );
};

export default Stats;
