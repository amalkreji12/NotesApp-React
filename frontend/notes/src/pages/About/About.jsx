/* eslint-disable no-unused-vars */
import React from "react";
import LandingNavBar from "../../components/NavBar/LandingNavBar";

const About = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="hero-section bg-gray-50 py-12">
        {/* About NotesApp Section */}
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-black">About NotesApp</h1>
          <p className="text-gray-700 mt-4">
            Welcome to NotesApp, your simple and efficient solution for
            organizing your ideas, tasks, and important information in one
            place. Whether you’re jotting down quick thoughts, creating to-do
            lists, or planning your next big project, NotesApp is designed to
            help you stay organized and productive.
          </p>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 mt-12">
          <h2 className="text-4xl font-bold text-center text-black">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-md motion-safe:hover:scale-105">
              <h3 className="font-semibold text-lg">Create Notes</h3>
              <p className="text-gray-700 mt-2">
                Quickly add notes with a clean and intuitive interface.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md motion-safe:hover:scale-105">
              <h3 className="font-semibold text-lg">Organize Your Way</h3>
              <p className="text-gray-700 mt-2">
                Categorize and manage notes for easier access.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md motion-safe:hover:scale-105">
              <h3 className="font-semibold text-lg">Edit & Update</h3>
              <p className="text-gray-700 mt-2">
                Modify notes anytime with ease.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md motion-safe:hover:scale-105">
              <h3 className="font-semibold text-lg">Secure Storage</h3>
              <p className="text-gray-700 mt-2">
                All your notes are stored securely in the cloud for easy access
                from anywhere.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md motion-safe:hover:scale-105">
              <h3 className="font-semibold text-lg">Modern Design</h3>
              <p className="text-gray-700 mt-2">
                Built with Tailwind CSS for a sleek, user-friendly experience.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="container mx-auto px-6 mt-12">
          <h2 className="text-4xl font-bold text-center text-black">
            Technologies Behind NotesApp
          </h2>
          <p className="text-gray-700 mt-4 text-center max-w-3xl mx-auto">
            We leverage the latest technologies to deliver a smooth and secure
            experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-md hover:text-blue-500 hover:shadow-lg">
              <h3 className="font-semibold text-lg">Frontend</h3>
              <p className="text-gray-700 mt-2">
                Built with React and styled using Tailwind CSS for a modern and
                responsive UI.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md hover:text-blue-500 hover:shadow-lg">
              <h3 className="font-semibold text-lg">Backend</h3>
              <p className="text-gray-700 mt-2">
                Powered by Node.js and Express.js for fast and scalable
                performance.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md hover:text-blue-500 hover:shadow-lg">
              <h3 className="font-semibold text-lg">Database</h3>
              <p className="text-gray-700 mt-2">
                MongoDB for secure and reliable data storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
