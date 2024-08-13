import React, { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div className="mt-20 md:mt-40 px-4 md:px-20">
      <div className="container mx-auto p-6 md:p-10 bg-black rounded-lg shadow-lg">
        <h1 className="text-center py-5 text-3xl text-white font-semibold">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-60">
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 mb-6 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <textarea
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-6 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-rose-600 text-white font-semibold hover:bg-rose-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-600 mb-8 text-center md:text-left">
              Get In Touch
            </h2>
            <p className="leading-relaxed text-gray-300">
              Welcome to our contact page! If you have any questions, feedback,
              or inquiries, please fill out the form below or reach out to us
              via email. Your message is important to us, and we will get back
              to you as soon as possible.
            </p>
            <div className="my-8 space-y-10 md:space-y-20">
              <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-7 text-gray-400" />
                  <div>
                    <span className="text-lg text-white">Call Us</span>
                    <p>+8801621342194</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="w-7 text-gray-400" />
                  <div>
                    <span className="text-lg text-white">Email Us</span>
                    <p>505mazharulislam@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                <div className="flex items-center gap-4">
                  <GlobeAltIcon className="w-7 text-gray-400" />
                  <div>
                    <span className="text-lg text-white">Website</span>
                    <p>https://mazharul-protfillo-kappa.vercel.app</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-7 text-gray-400" />
                  <div>
                    <span className="text-lg text-white">Address</span>
                    <p>Mymenshingh, Dhaka</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-lg text-white">Follow Us</h1>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/mazharulislam-12">
                    <BsGithub className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/mazharul-islam-49ab98256">
                    <BsLinkedin className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100031068829811">
                    <BsFacebook className="w-8 h-8 bg-gray-700 text-white rounded-full p-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {submitted && (
          <p className="text-green-500 mt-4 text-center">
            Thanks for submitting!
          </p>
        )}
        {error && (
          <p className="text-red-500 mt-4 text-center">
            Failed to submit. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
