import React from 'react';
import about from '../../assets/Banner.png'

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-16 bg-white">
            <div className='flex-1 '>
                <h2 className='text-4xl font-semibold '>About Me</h2>
                <p className='my-4'>Hello, I'm Mazharul Islam, a passionate frontend developer with a love for creating clean, intuitive user interfaces. I specialize in crafting responsive web experiences using HTML, CSS,JavaScript and React Js. With a keen eye for design and a commitment to delivering high-quality code, I aim to bring creativity and functionality together in every project I undertake. Let's build something amazing together!</p>
                <a className="inline-block bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600">Download CV</a>
            </div>
            <div className='flex-1'>
                <img src={about} alt="" />
            </div>

        </section>
    );
};

export default About;
