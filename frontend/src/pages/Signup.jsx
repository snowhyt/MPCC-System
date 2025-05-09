import React, {useState} from "react";
import Navbar from "../components/Navbar.jsx";

function Signup() {

  const [formData, setFormData] = useState({
    //name
    empId: "",
    firstName: "",
    middleName: "",
    lastName: "",

    //birthdate and job role
    birthday: "",
    gender: "",
    position: "",
    accessLevel: "",

    // Address
    city: "",
    barangay: "",
    street: "",

    // Contact
    email: "",
    phoneNumber: "",

    //picture
    profileImage: null,
  });







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
          <div className="flex flex-col w-[57rem] h-[72rem] p-8 space-y-6 bg-white rounded-lg shadow-lg">
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
              <label className="flex justify-end text-gray-700 text-md font-bold  pr-18">
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
                {/* Employee name */}
                <label className="text-gray-700 text-md font-bold">
                  Employee Name
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" First Name"
                  />
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" Middle Name"
                  />
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" Last Name"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">First Name</p>
                  <p className="text-gray-700 pl-5">Middle Name</p>
                  <p className="text-gray-700 pr-45">Last Name</p>
                </div>
                {/* Birthday/gender/position/accesslevel */}
                <div className="flex flex-col space-y-4">
                  <div className="">
                    <label className="text-black text-md font-bold flex justify-between pb-3">
                      <p className="text-gray-700">Birthday</p>
                      <p className="text-gray-700 pl-2">Gender</p>
                      <p className="text-gray-700 pl-3">Position</p>
                      <p className="text-gray-700 pr-12">Access level</p>
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        className="border-black border-1 shadow-sm text-gray-700 p-1"
                      />
                      <select
                        id="gender"
                        name="gender"
                        className=" text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Select an option</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-35"
                        placeholder="Position"
                      />
                      <select
                        id="accesslevel"
                        name="accesslevel"
                        className=" text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Select an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="pt-5">
                      <label className="text-gray-700 text-md font-bold">
                        Address
                      </label>
                      <label
                        class="flex mb-2 text-sm font-medium text-gray-700 pt-2"
                        for="city"
                      >
                        City/Municipality
                      </label>
                      <select
                        id="city"
                        class="w-full py-1 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        onchange="updateBarangays(this.value)"
                      >
                        <option value="">Select a city</option>
                        <option value="manila">Manila</option>
                        <option value="quezon">Quezon City</option>
                        <option value="makati">Makati</option>
                        <option value="pasig">Pasig</option>
                      </select>
                      <label class="flex mb-2 text-sm font-medium text-gray-700 pt-2">
                        Barangay
                      </label>
                      <input
                        type="text"
                        id="brgy"
                        name="brgy"
                        className="border-black border-1 shadow-sm text-gray-700 p-1  w-full"
                        placeholder="Brgy"
                      />
                      <label class="flex mb-2 text-sm font-medium text-gray-700 pt-2">
                        Street
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        className="border-black border-1 shadow-sm text-gray-700 p-1  w-full"
                        placeholder="Street"
                      />
                    </div>
                    <div className="flex justify-between pt-5">
                      <label className="text-gray-700 text-md font-bold">
                        Email
                      </label>
                      <label className="text-gray-700 text-md font-bold pr-[17rem]">
                        Phone Number
                      </label>
                    </div>
                    <div className="flex justify-between pt-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-[25rem]"
                        placeholder="Enter Email Address"
                      />
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-[25rem]"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="pt-10">
                      <div className="w-full border-t border-blue-500"></div>
                    </div>
                    <div className="flex justify-center pt-10">
                      <button
                        type="submit"
                        className="w-[15rem] py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-company w-full">
        <div className="flex flex-col items-center h-25">
          <img
            src="/images/MPC-WHITETEXT.png"
            alt="Logo"
            className="w-65 h-20"
          />
          <div className="w-11/12 border-t border-gray-300 mt-4 mb-2"></div>
        </div>

        <p className="text-center text-sm text-white p-5">
          Copyright <strong>Metropolitan Pest Control Corporation.</strong> All
          Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Signup;
