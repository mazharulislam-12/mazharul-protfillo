import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          {/* Link components for navigation */}
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/skill" className="link link-hover">Skill</Link>
          <Link to="/project" className="link link-hover">Project</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl cursor-pointer">
            <a href="https://github.com/mazharulislam-12">
              <BsGithub className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
            </a>
            <a href="https://www.linkedin.com/in/mazharul-islam-49ab98256">
              <BsLinkedin className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100031068829811">
              <BsFacebook className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
            </a>
            <a href="https://wa.me/8801621342194"> {/* WhatsApp লিঙ্ক */}
              <BsWhatsapp className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Mazharul Islam
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
  