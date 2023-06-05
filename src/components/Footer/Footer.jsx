import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import SecButton from "../SecButton";
import logo from "../../img/whiteLogo.png";
import InfoLinks from "./InfoLinks";

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr from-primary to-secondary text-white px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-2 flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="pb-8 w-full sm:w-5/12">
          <p className="text-gray-200 text-sm">
            Sign up to receive the latest info on College Grahasthi products, special offers, and more!
          </p>
          <div className="py-8 sm:py-10 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full sm:w-auto focus:outline-none p-4 rounded-xl text-gray-500"
            />
            <SecButton value="Subscribe" to="" />
          </div>

          <img src={logo} alt="logo" className="w-28" />
        </div>

        <div className="flex flex-wrap gap-8 sm:flex">
          <InfoLinks
            title="Quick links"
            items={[
              { link: "/others", value: "Solutions" },
              { link: "/others", value: "Company" },
              { link: "/others", value: "Products" },
              { link: "/others", value: "Support" }
            ]}
          />
          <InfoLinks
            title="Get in touch"
            items={[
              { link: "/others", value: "Contact Us" },
              { link: "/others", value: "Become a partner" },
              { link: "/others", value: "Find on map" },
              { link: "/others", value: "News and blogs" }
            ]}
          />
          <InfoLinks
            title="Company"
            items={[
              { link: "/others", value: "About Us" },
              { link: "/others", value: "Sustainability" },
              { link: "/others", value: "Leadership" },
              { link: "/others", value: "Careers" }
            ]}
          />
        </div>
      </div>

      <div className="w-full h-1 bg-white"></div>
      <div className="py-4 flex flex-col-reverse sm:flex-row justify-between text-gray-300 text-sm font-semibold">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} College Grahasthi LLC. All rights reserved
        </p>
        <p className="text-center sm:text-right">Privacy Policy | Terms of Service</p>
        <div className="text-xl text-white flex justify-center sm:justify-between w-36 mx-auto sm:mx-0">
          <a href="/">
            <BsInstagram />
          </a>
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
          <a href="/">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
