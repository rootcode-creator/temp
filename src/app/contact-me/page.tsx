import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactMePage() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-4">Contact Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">Feel free to contact me with any questions, feedback, or suggestions. I'll get back to you as soon as possible.</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-green-500 mr-3" size={20} />
                  <span>contact@techengineer.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-green-500 mr-3" size={20} />
                  <span>+123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-green-500 mr-3" size={20} />
                  <span>Tech Engineer Office, Innovation Street, Digital City</span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
