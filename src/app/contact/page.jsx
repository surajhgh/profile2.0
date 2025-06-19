// export default function Contact() {
//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h1>
          
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <form>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
//                 <input 
//                   type="text" 
//                   id="subject" 
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//                   placeholder="What's this about?"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
//                 <textarea 
//                   id="message" 
//                   rows="5" 
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit" 
//                 className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition w-full md:w-auto"
//               >
//                 Send Message
//               </button>
//             </form>
            
//             <div className="mt-12 pt-8 border-t border-gray-200">
//               <h3 className="text-xl font-bold mb-4">Other Ways to Reach Me</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="flex items-center">
//                   <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                     <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Email</h4>
//                     <p className="text-gray-600">hello@example.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                     <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Phone</h4>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-indigo-100 p-3 rounded-full mr-4">
//                     <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Location</h4>
//                     <p className="text-gray-600">San Francisco, CA</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "surajthapa",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_8012awl",
        {
          to_name: "Suraj",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "7NyXxt-W1WUOfNOG3"
      );

      setStatus({
        message: "Message sent successfully! I'll respond soon.",
        isError: false
      });
      setFormData({ name: "", email: "", message: "" });
      setIsAgreed(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        message: "Failed to send message. Please email me directly at surajthapalamichanaymagar@gmail.com",
        isError: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container mx-auto text-center ">
        <p className="text-4xl font-bold">Contact Me</p>
        <p className="text-xl mt-2 ">Request Free Consultancy</p>

        <div className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold">My Details</p>
            <p className="mt-4 text-gray-600">
              Fill out the form and I will get back to you as soon as possible.
            </p>
            <div className="mt-6 text-left">
              <p className="font-medium">Email me directly:</p>
              <a 
                href="mailto:surajthapalamichanaymagar@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                surajthapalamichanaymagar@gmail.com
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
                className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors ${
                  !isAgreed || isLoading 
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
                <div className={`p-3 rounded-md ${
                  status.isError 
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