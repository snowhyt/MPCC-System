import React from "react";
import Navbar from "../components/Navbar.jsx";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div>
          <img
            src="/images/Hero-section.png"
            className="w-full h-40"
            alt="Hero"
          />
        </div>
        <div className="flex items-center justify-center pt-10 pb-15 max-h-full w-full bg-defaultBG">
          <div className="flex flex-col w-[57rem] h-[50rem] p-8 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-lg text-blue-500">
              Fill out the form carefully for registration
            </h2>
            <div className="w-full border-t border-blue-500"></div>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-40 h-40 rounded-full border-4 border-blue-700 overflow-hidden">
                  <img
                    src="/images/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800">
                  EDIT PROFILE
                </button>
              </div>
              <label className="flex justify-end text-black pr-18">
                Emp I.D
              </label>
              <input
                type="text"
                id="id"
                name="id"
                className="flex justify-end ml-[45rem] border-black shadow-sm border-1 text-gray-700"
                placeholder=" Auto-Generated"
              />
              <div className="flex flex-col space-y-4">
                <label className="text-black text-md">Employee Name</label>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700"
                    placeholder=" First Name"
                  />
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700"
                    placeholder=" Middle Name"
                  />
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700"
                    placeholder=" Last Name"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
