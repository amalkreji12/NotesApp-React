/* eslint-disable no-unused-vars */
import React from "react";
import LandingNavBar from "../../components/NavBar/LandingNavBar";

const Features = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="bg-gray-50 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-black">Features</h1>
          <p className="text-gray-700 mt-4">
            Discover how NotesApp helps you stay organized and productive with
            these amazing features.
          </p>
        </div>

        {/* Features Grid Section */}
        <div className="container mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-plus text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Create Notes
                </h3>
                <p className="text-gray-700 mt-2">
                  Quickly jot down ideas, tasks, or reminders with our
                  easy-to-use interface.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-folder text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Organize Notes
                </h3>
                <p className="text-gray-700 mt-2">
                  Categorize and manage your notes to easily find what you need.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-edit text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">Edit Notes</h3>
                <p className="text-gray-700 mt-2">
                  Make changes to your notes anytime with a simple edit feature.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-sync text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Sync Across Devices
                </h3>
                <p className="text-gray-700 mt-2">
                  Access your notes from anywhere with real-time
                  synchronization.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-lock text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Secure Storage
                </h3>
                <p className="text-gray-700 mt-2">
                  All your data is stored securely in the cloud with encryption.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Set Reminders
                </h3>
                <p className="text-gray-700 mt-2">
                  Never forget a task or event by setting reminders for your
                  notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
