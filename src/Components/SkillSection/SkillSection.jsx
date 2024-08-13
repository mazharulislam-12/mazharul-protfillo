import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const SkillSection = () => {
  return (
    <div className="mt-20 md:mt-40 px-4">
      <h1 className="text-4xl text-center py-5 text-white font-semibold">
        My Skill
      </h1>
      <div className="max-w-screen-2xl mt-12 md:mt-20 mx-auto flex flex-col md:flex-row items-center justify-center md:gap-20 gap-10">
        <div className="p-5 border rounded border-rose-500 border-opacity-50 w-full md:w-[700px] lg:w-[900px]">
          <h1 className="text-center mb-7 text-white text-2xl">
            Frontend Developer
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            <div className="flex items-start gap-2">
              <FaHtml5 className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="text-xl text-white">HTML</p>
                <p className="font-light">Expert</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaCss3 className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="uppercase text-xl text-white">CSS</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaBootstrap className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="text-xl text-white">Bootstrap</p>
                <p className="font-light">Basic</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <SiTailwindcss className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="uppercase text-xl text-white">Tailwind</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaJs className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="text-xl text-white">JavaScript</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaReact className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="uppercase text-xl text-white">React</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaGit className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="text-xl text-white">Git</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaGithub className="text-xl mt-1 text-rose-500" />
              <div className="font-poppins">
                <p className="uppercase text-xl text-white">GitHub</p>
                <p className="font-light">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
