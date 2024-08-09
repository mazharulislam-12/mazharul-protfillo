import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending the data to an API
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
      {submitted && <p className="text-green-500 mt-4 text-center">Thanks for submitting!</p>}
    </div>
  );
};

export default Contact;
