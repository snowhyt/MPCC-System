import React from "react";

import Navbar from "../components/Navbar.jsx";

function Signup() {
  return (
    <>
      <Navbar />

      <div>
        <body className="min-h-screen bg-white">
          <div>
            <img src="/images/Hero-section.png" className="w-full h-43" />
          </div>
          <div className="flex items-center justify-center pt-10 pb-15 mx-h-full w-full bg-defaultBG">
            <div className="flex flex-col w-300 h-200 p-8 space-y-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-center text-lg text-blue-500">
                Fill out the form carefully for registration
              </h2>
              <div className="w-full border-t border-blue-500"></div>
              <form className="flex flex-col space-y-4"></form>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Signup;
