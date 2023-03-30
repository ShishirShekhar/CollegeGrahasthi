import { Link } from "react-router-dom";
import test from "../../img/testImg.png";
import Button from "../Button";

const Sample = () => {
    return (
        <div className="h-screen text-black px-24 flex items-center justify-between">
            <div className="relative w-full">
                <img src={test} alt="test" className="shadow-xl rounded-3xl" />
                <div className="w-96 bg-gray-900 absolute left-60 top-2/3 flex flex-col text-white pl-4 py-5 rounded-lg">
                    <h1 className="text-2xl">Mehar Apartment</h1>
                    <p>Lawgate, Phagwara</p>
                    <ul className="flex flex-wrap h-auto">
                        <li className="pr-2"><span className="text-xl">·</span>Wifi</li>
                        <li className="pr-2"><span className="text-xl">·</span>AC</li>
                        <li className="pr-2"><span className="text-xl">·</span>Chair</li>
                        <li className="pr-2"><span className="text-xl">·</span>Kitchen</li>
                        <li className="pr-2"><span className="text-xl">·</span>Fir Security</li>
                        <li className="pr-2"><span className="text-xl">·</span>Animal Friendly</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary"></div>
                <h1 className="text-5xl font-semibold w-4/5 pt-5">Search best room through filter</h1>
                <p className="w-3/4 text-gray-300 text-lg font-semibold tracking-wider text-justify leading-9 py-8">
                    All our team are professional and competent in their fields and will help you realize your dream building with excellent result.
                </p>

                <div className="flex items-center">
                    <div className="w-52 text-white"><Button value="See all" to="/other" /></div>
                    {/* Add link */}
                    <Link to="/other" className="px-10 text-xl font-semibold">How it works →</Link>
                </div>

            </div>
        </div>
    )
};

export default Sample;
