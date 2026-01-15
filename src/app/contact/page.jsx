
'use client';
import React, { useState } from "react";


function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    message: "",
    isError: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = (e) => setIsAgreed(e.target.checked);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAgreed) {
      setStatus({
        message: "You must agree to the terms and conditions",
        isError: true
      });
      return;
    }

    setIsLoading(true);
    setStatus({ message: "", isError: false });

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Simulate network delay
    setTimeout(() => {
      setStatus({
        message: "Message sent (simulated)! I'll respond soon.",
        isError: false
      });
      setFormData({ name: "", email: "", message: "" });
      setIsAgreed(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-xl mt-2 ">Request Free Consultancy</p>

        <div className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold">My Details</p>
            <p className="mt-4 text-gray-600">
              hello! I'm Suraj Thapalamichanay Magar, a passionate web developer.
              <br /> i love creating beautiful and functional websites.
              <br /> Feel free to reach out for any inquiries or collaborations.
            </p>
            <p className="mt-4 text-gray-600">
              Fill out the form and I will get back to you as soon as possible.
            </p>
            <div className="mt-6 text-left">
              <p className="font-medium">Email me directly:</p>
              <a
                href="mailto:surajthapalamichanaymagar@gmail.com"
                className="text-blue-600 hover:underline"
              >

                📧surajthapalamichanaymagar@gmail.com
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={isAgreed}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4"
                />
                <label htmlFor="agree-terms" className="text-gray-600 text-sm ml-2">
                  I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={!isAgreed || isLoading}
                className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors ${!isAgreed || isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Submit Message'
                )}
              </button>

              {status.message && (
                <div className={`p-3 rounded-md ${status.isError
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
                  }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;