import SecButton from "../SecButton";
import logo from "../../img/whiteLogo.png"

const Footer = () => {
    return (
        <div className="bg-gradient-to-tr from-primary to-secondary text-white px-24 pt-20 pb-2 flex flex-col justify-between">
            <div>
                <div className="pb-8">
                    <p className="text-gray-200 text-sm">
                        Sign up to recieve the latest info on College Grahasthi products, special offers, and more!
                    </p>
                    <div className="py-10 flex gap-2">
                        <input type="text" placeholder="Email Address" className="w-full focus:outline-none p-4 rounded-xl" />
                        <SecButton value={"Subscribe"} to={""} />
                    </div>

                    <img src={logo} alt="logo" className=" w-28" />
                </div>
            </div>

            <div>
                <div className="w-full h-1 bg-white"></div>

                <div className="flex">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
