import React, { useState } from "react";
import bgImage from "../assets/images/banner.png"; // Replace with the actual path to your background image
import bgSVG from "../assets/images/banner-bgs.svg"; // Replace with the actual path to your background SVG
import RunningNumbers from "../components/AnimatedNumber";

const YourComponent = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    minHeight: "100vh",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
  };

  const bgSvgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: `url(${bgSVG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between">
      {/* ================ Header ==================== */}
      <div className="shadow-md w-full fixed top-0 left-0 z-[100]">
        {/* Here : =================== =========  */}
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 h-20">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Designer
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? "X" : "="}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white text-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button>Get Started</button>
          </ul>
        </div>
      </div>

      {/* Banner BG ================================= */}
      <div style={bgStyle} className="w-full">
        <div
          style={bgSvgStyle}
          className="flex items-center w-[100%] md:w-[60%] lg:px-[50px] 2xl:px-[200px]"
        >
          <div className="flex flex-col justify-center gap-4 text-white w-[400px]">
            <h1 className="text-6xl uppercase break-words font-black tracking-widest">
              Demand the Best!
            </h1>
            <div className="flex justify-center items-center max-w-[600px] px-auto">
              <span className="w-3 h-3 rounded-full bg-white"></span>
              <hr className="mr-2 flex-grow border-t border-white" />
              <span className="font-semibold">Why choose us?</span>
            </div>
            <p>
              The financial viability and rate of return of a solar power system
              is maximized when its maintenance cost is minimized. By offering
              only the most cutting edge solar power products sourced from the
              top global as well as local manufacturers, we strive to ensure
              maximum durability and minimum recurring costs at the customer
              end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
