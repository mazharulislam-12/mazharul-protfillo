import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import banner from '../../assets/Banner.png'

const Banner = () => {
  return (
    <section className="bg-gray-100 py-12 w-full ">
      <div className="container mx-auto h-[600px]  flex flex-col lg:flex-row  items-center  justify-between px-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img 
            src= {banner}
            alt="Banner" 
            className="rounded-full shadow-lg w-[500px] object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Hi, I'm Mazharul <br />

            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm Fontend Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '36px', display: 'inline-block' }}
      repeat={Infinity}
    />

          </h1>
          <p className="text-lg text-gray-600 mb-8">
          Crafting Beautiful & Functional Web Experiences
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow hover:bg-blue-700 transition duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
