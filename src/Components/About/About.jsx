import React from "react";
import about from "../../assets/about_img.png";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-evenly md:flex-row-reverse py-16 px-6 md:px-16 container mx-auto">
      <div className="w-full md:w-[500px] space-y-8 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          About Me
        </h2>
        <p className="leading-relaxed text-gray-400">
          Hello, I'm Mazharul Islam, a passionate frontend developer with a love
          for creating clean, intuitive user interfaces. I specialize in
          crafting responsive web experiences using HTML, CSS, JavaScript, and
          React Js. With a keen eye for design and a commitment to delivering
          high-quality code, I aim to bring creativity and functionality
          together in every project I undertake. Let's build something amazing
          together!
        </p>
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="inline-block bg-rose-500 text-white font-medium py-2 px-4 rounded-md hover:bg-rose-600 transition-all duration-300 cursor-pointer"
        >
          Download CV
        </a>

      </div>
      <div className="w-full md:w-[400px] flex justify-center">
        <img className="rounded-lg border-none w-[300px] md:w-full" src={about} alt="About" />
      </div>
    </section>
  );
};

export default About;