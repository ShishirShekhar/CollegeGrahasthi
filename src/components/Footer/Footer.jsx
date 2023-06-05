import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import SecButton from "../SecButton";
import logo from "../../img/whiteLogo.png";
import InfoLinks from "./InfoLinks";

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr from-primary to-secondary text-white px-4 sm:px-6 lg:px-20 py-12 sm:py-20">
      <div className=" flex flex-col md:flex-row justify-around w-full">
        <div className="pb-8">
          <p className="text-gray-200 text-sm mb-6">
            Sign up to receive the latest info on College Grahasthi products, special offers, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full sm:w-auto focus:outline-none p-4 rounded-xl text-gray-500"
            />
            <SecButton value="Subscribe" to="" />
          </div>

          <img src={logo} alt="logo" className="w-28 mt-8 mx-auto sm:mx-0" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
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

      <hr className="w-full border-gray-700 my-8" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row justify-between text-gray-300 text-sm font-semibold">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} College Grahasthi LLC. All rights reserved
        </p>
        <p className="text-center sm:text-right mb-4 sm:mb-0">Privacy Policy | Terms of Service</p>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <a href="/" className="mx-2">
            <BsInstagram />
          </a>
          <a href="/" className="mx-2">
            <BsFacebook />
          </a>
          <a href="/" className="mx-2">
            <BsTwitter />
          </a>
          <a href="/" className="mx-2">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
