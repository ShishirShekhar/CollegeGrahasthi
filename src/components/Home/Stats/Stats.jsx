// Import all the required modules
import { Link } from "react-router-dom";
import Stat from "./Stat";

const Stats = () => {
    return (
        <div className="h-screen bg-gray-100 text-black px-24 flex items-center justify-between">
            <div className="">
                <Stat />
            </div>
            
            <div className="w-1/2">
                <h1 className="text-4xl font-semibold leading-relaxed pr-40">
                    We are providing one of the best rooms for students
                </h1>
                <p className="leading-10 pr-56 py-12 text-gray-800">
                Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
                </p>

                <div className="">
                    {/* Add check marks */}
                    <div className="py-2 font-semibold">
                        <span className="pr-2">✅</span>
                        Unlimited design possibility
                    </div>
                    <div className="py-2 font-semibold">
                        <span className="pr-2">✅</span>
                        Completely responsive features
                    </div>
                </div>

                <Link to="/other">
                    <p className="py-10 font-semibold text-sky-500">Explore more →</p>
                </Link>
            </div>
        </div>
    )
}

export default Stats;
