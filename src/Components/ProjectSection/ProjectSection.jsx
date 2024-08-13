import { BsGithub } from "react-icons/bs";
import { FcLink } from "react-icons/fc";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project3.jpeg";
import "./project.css";

const ProjectSection = () => {
  const projects = [
    {
      img: project1,
      discription:
        "Dragon News is a React-based website delivering the latest dragon lore and mythology. With dynamic content, seamless navigation via React Router DOM, and an engaging design, it's your ultimate source for dragon-related news.",
      githubLink: "https://github.com/mazharulislam-12/dragon-news-react-js",
      liveLink: "https://new-dragon-fa489.web.app",
      GitHubIcon: <BsGithub />,
      liveLinkIocon: <FcLink />,
    },
    {
      img: project2,
      discription:
        "A course registration website built with React, offering seamless enrollment, course browsing, and schedule management. With user-friendly navigation and real-time updates, it simplifies the process of managing academic registrations.",
      githubLink: "https://github.com/mazharulislam-12/course-registration",
      liveLink: "https://sunny-begonia-2d6f5b.netlify.app",
      GitHubIcon: <BsGithub />,
      liveLinkIocon: <FcLink />,
    },
    {
      img: project3,
      discription:
        "A donation campaign website designed to inspire and facilitate giving. Built with React, it offers easy navigation, secure payment options, and real-time progress tracking, making it simple to support your chosen causes.",
      githubLink:
        "https://github.com/mazharulislam-12/donation-campain-website",
      liveLink: "https://wondrous-kashata-44f425.netlify.app",
      GitHubIcon: <BsGithub />,
      liveLinkIocon: <FcLink />,
    },
  ];

  return (
    <div className="container mx-auto mt-20 md:mt-40 px-4 md:px-20">
      <h1 className="text-4xl text-center py-5 text-white font-semibold">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-20">
        {projects.map((item, index) => (
          <div key={index}>
            <div className="border space-y-5 border-gray-700 p-4 rounded-lg">
              <div className="image-container rounded-lg h-56 sm:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt="projectImg"
                  className="zoom-image rounded-lg h-full w-full object-cover"
                />
              </div>
              <p className="text-gray-400">{item.discription.slice(0, 170)}</p>
              <div className="flex items-center gap-4">
                <a
                  className="text-[24px] md:text-[28px]"
                  href={item.githubLink}
                >
                  {item.GitHubIcon}
                </a>
                <a
                  className="text-xl p-2 bg-gray-300 rounded-full"
                  href={item.liveLink}
                >
                  {item.liveLinkIocon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
