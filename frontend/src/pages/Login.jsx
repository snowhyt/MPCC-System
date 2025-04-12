import React from "react";

import Navbar from "../components/Navbar.jsx";

function Login() {
  return (
    <>
      <Navbar />

      {/* Login Form */}

      <div className="flex items-center justify-center min-h-screen w-screen bg-defaultBG">
        <div className="flex flex-col w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-company">LOGIN</h2>

          <form action="#" method="POST" className="flex flex-col space-y-4">
            {/* Username Field */}
            <div className="flex flex-col">
              <label
                htmlFor="emp_ID"
                className="text-sm font-medium text-gray-600"
              >
                Emp ID
              </label>
              <input
                type="text"
                id="emp_ID"
                name="emp_ID"
                required
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
