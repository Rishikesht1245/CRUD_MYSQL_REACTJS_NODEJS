import React from "react";
import bgImage from "../assets/images/banner.png"; // Replace with the actual path to your background image
import bgSVG from "../assets/images/banner-bgs.svg"; // Replace with the actual path to your background SVG

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
    width: "70%",
    height: "100%",
    background: `url(${bgSVG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="w-full h-[15vh] bg-white">Header</div>
      <div style={bgStyle} className="w-full">
        <div
          style={bgSvgStyle}
          className="flex items-center w-full lg:p-[50px] 2xl:px-[200px] bg-tra"
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
