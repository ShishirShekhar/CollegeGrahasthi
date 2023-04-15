import SecButton from "../SecButton";
import logo from "../../img/whiteLogo.png"
import InfoLinks from "./InfoLinks";

const Footer = () => {
    return (
        <div className="bg-gradient-to-tr from-primary to-secondary text-white px-24 pt-20 pb-2 flex flex-col justify-between">
            <div className="flex justify-around">
                <div className="pb-8 w-5/12">
                    <p className="text-gray-200 text-sm">
                        Sign up to recieve the latest info on College Grahasthi products, special offers, and more!
                    </p>
                    <div className="py-10 flex gap-2">
                        <input type="text" placeholder="Email Address" className="w-full focus:outline-none p-4 rounded-xl" />
                        <SecButton value={"Subscribe"} to={""} />
                    </div>

                    <img src={logo} alt="logo" className=" w-28" />
                </div>

                <div className="flex">
                    <InfoLinks title={"Quick links"} items={[{link: "/others", value:"Solutions"}, {link: "/others", value:"Company"}, {link: "/others", value:"Products"}, {link: "/others", value:"Support"}]} />
                    <InfoLinks title={"Get in touch"} items={[{link: "/others", value:"Contact Us"}, {link: "/others", value:"Become a partner"}, {link: "/others", value:"Find on map"}, {link: "/others", value:"New and blogs"}]} />
                    <InfoLinks title={"Company"} items={[{link: "/others", value:"About Us"}, {link: "/others", value:"Sustainability"}, {link: "/others", value:"Leadership"}, {link: "/others", value:"Careers"}]} />
                </div>
            </div>

            <div>
                <div className="w-full h-1 bg-white"></div>
            </div>
        </div>
    )
}

export default Footer;
