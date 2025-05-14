import React from "react";
import Navbar from "../components/Navbar.jsx";

function Login() {
  return (
    <>
      <Navbar />

      {/* Hero Image */}
      <div>
        <img
          src="/images/Hero-section.png"
          className="w-full h-40 md:h-60 object-cover"
          alt="Hero Section"
        />
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center h-[45rem] bg-defaultBG px-4">
        <div className="w-full max-w-2xl bg-white p-10 md:p-14 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-center text-company">LOGIN</h2>

          <form action="#" method="POST" className="space-y-6 text-2xl">
            {/* Username Field */}
            <div>
              <label
                htmlFor="emp_ID"
                className="text-lg font-medium text-gray-600"
              >
                Emp ID
              </label>
              <input
                type="text"
                id="emp_ID"
                name="emp_ID"
                required
                placeholder="Enter your username"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="text-lg font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p className="text-lg font-semibold">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 text-lg not-first:font-semibold"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-company w-full">
        <div className="flex flex-col items-center py-6">
          <img
            src="/images/MPC-WHITETEXT.png"
            alt="Logo"
            className="w-80 h-auto"
          />
          <div className="w-11/12 border-t border-gray-300 mt-4 mb-2"></div>
        </div>

        <p className="text-center text-xl text-white pb-6">
          Copyright <strong>Metropolitan Pest Control Corporation.</strong> All
          Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Login;
