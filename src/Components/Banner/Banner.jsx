import React from "react";
import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-12 w-full bg-black">
      <div className="container mx-auto h-auto lg:h-[700px] flex flex-col-reverse lg:flex-row-reverse items-center justify-between px-5 lg:px-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={banner}
            alt="Banner"
            className="rounded-full shadow-lg w-[300px] md:w-[400px] lg:w-[500px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full relative z-30 lg:w-1/2 text-center mt-12 lg:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Hi, I'm Mazharul <br />
            <TypeAnimation
              sequence={[
                "I'm Frontend Developer",
                1000,
                "I Want to be Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "24px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8">
            Crafting Beautiful & Functional Web Experiences
          </p>
          <Link
            to="/contact"
            type="button"
            className="text-white bg-rose-500 hover:bg-rose-600 font-semibold rounded text-sm px-8 py-2 text-center"
          >
            Get in Touch 
          </Link>

          <div className="absolute rounded-full w-full -left-20 -top-10 opacity-30 bg-gradient-to-tr from-rose-500 blur-3xl -z-50 to-black/30 h-[300px] md:h-[400px] backdrop-blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
