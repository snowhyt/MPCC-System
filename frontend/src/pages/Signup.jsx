import React, {useState} from "react";
import Navbar from "../components/Navbar.jsx";
import {Toaster, toast} from "react-hot-toast";
function Signup() {

  const [formData, setFormData] = useState({
    //name
    emp_id: "",
    fname: "",
    mname: "",
    lname: "",

    //birthdate and job role
    birthdate: "",
    sex: "",
    position: "",
    role: "",

    // Address
    address1: "",
    address2: "",
    address3: "",

    // Contact
    email: "",
    phoneNumber: "",

    //picture
    profileImage: null,


  

  });
    //password
    const [showPasswordDialog, setPasswordDialog] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData((prevData) =>({...prevData, [name]: value}));
};

const handlePasswordChange = (e) => setPassword(e.target.value);
const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

const validateMainFormData = () =>{
  const requiredFields = {
    
    fname: true,
    mname: true,
    lname: true,
    birthdate: true,
    sex: true,
    position: true,
    role: true,
    address1: true,
    email: true,
  };


  //may babaguhin pa
  const fieldDisplayNames = {
   
    fname: "First Name",
    mname: "Middle Name",
    lname: "Last Name",
    birthdate: "Birthday",
    sex: "Sex",
    position: "Position",
    role: "Role",
    address1: "Address Line 1",
    email: "Email",
  };


  



for (const field in requiredFields){
  if(requiredFields[field] && !formData[field]){
    toast.error(`${fieldDisplayNames[field]} is required.`);
    return false;
  } 
}
if(formData.email && !/\S+@\S+\.\S+/.test(formData.email)){
  toast.error("Please enter a valid email address");
  return false;
}

return true;

};

const handleCreateAccount = async () => {
  if(!password || !confirmPassword){
    toast.error("Password and Confirm password are required.");
    return;
  }

  if (password !== confirmPassword){
    toast.error("Password do not match");
    return;
  }

const {address1, address2, address3, ...otherData} = formData;
const mergingAddress = [address1, address2, address3].filter(Boolean);
const fullAddress = mergingAddress.join(", ");

const submissionData = {
  ...otherData,
  address: fullAddress,
  password: password,
};

try {
  const response = await fetch("api/auth/signup",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(submissionData),

  });
  const result = await response.json();
  if(response.ok){
    toast.success("Signup successful!");
    setPasswordDialog(false);
    setPassword("");
    setConfirmPassword("");
  } else {
    toast.error(`Signup failed: ${result.message || "Unknown error"}`);
  }
} catch (error) {
  console.error("Error during signup:", error);
  toast.error("An error occured during signup.");
}
};





  return (
    <>
      <Navbar />
      <Toaster position='top-center' reverseOrder={false} />
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
          
          {/* this is the form */}
            <form 
            className="flex flex-col space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();



              if(validateMainFormData()){
                setPasswordDialog(true);
                
              }    


              
            
            
            }}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-40 h-40 rounded-full border-4 border-blue-700 overflow-hidden">
                  {/* profile */}
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
              {/* empid */}
              <label className="flex justify-end text-gray-700 text-md font-bold  pr-18">
                Emp ID
              </label>
              <input
                type="text"
                id="emp_id"
                name="emp_id"
                className="flex justify-end ml-[45rem] border-black shadow-sm border-1 text-gray-700"
                placeholder=" Auto-Generated"

                //tatanggalin
                value={formData.emp_id}
                onChange={handleChange}
                disabled
              />
              <div className="flex flex-col space-y-4">
                {/* Employee name */}
                <label className="text-gray-700 text-md font-bold">
                  Employee Name
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" First Name"

                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" Middle Name"

                    value={formData.mname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" Last Name"

                    value={formData.lname}
                    onChange={handleChange}
                    required
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


                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                      />
                      <select
                        id="sex"
                        name="sex"
                        className=" text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    
                        value={formData.sex}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-35"
                        placeholder="Position"

                        value={formData.position}
                        onChange={handleChange}
                        required
                      />
                      <select
                        id="accesslevel"
                        name="accesslevel"
                        className=" text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                     
                        value={formData.role}
                        onChange={handleChange}
                     >
                        <option>Select an option</option>
                        <option>admin</option>
                        <option>staff</option>
                      </select>
                    </div>
                    <div className="pt-5">
                      <label className="text-gray-700 text-md font-bold">
                        Address
                      </label>
                      <label
                        className="flex mb-2 text-sm font-medium text-gray-700 pt-2"
                        for="city"
                      >
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        id="address1"
                        name="address1"
                        className="border-black border-1 shadow-sm text-gray-700 p-1  w-full"
                        placeholder="Address Line 1"

                        value={formData.address1}
                        onChange={handleChange}
                        required
                      />

              


                      
                      <label className="flex mb-2 text-sm font-medium text-gray-700 pt-2">
                       Address Line 2
                      </label>
                      <input
                        type="text"
                        id="address2"
                        name="address2"
                        className="border-black border-1 shadow-sm text-gray-700 p-1  w-full"
                        placeholder="Address Line 2"

                        value={formData.address2}
                        onChange={handleChange}
                        
                      />
                      <label className="flex mb-2 text-sm font-medium text-gray-700 pt-2">
                        Address Line 3
                      </label>
                      <input
                        type="text"
                        id="address3"
                        name="address3"
                        className="border-black border-1 shadow-sm text-gray-700 p-1  w-full"
                        placeholder="Address Line 3"

                        value={formData.address3}
                        onChange={handleChange}
                        
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

                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-[25rem]"
                        placeholder="Enter Phone Number"


                        value={formData.phoneNumber}
                        onChange={handleChange}
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

      {/* PasswordDialog */}
      {showPasswordDialog && 
      (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-4">
              <h3 className="text-2xl font-semibold mb-6 text-center text-company">
                Create Your Password
              </h3>
              <div>
                <label htmlFor="dialogPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input 
                type="password"
                id="dialogPassword"
                name="dialogPassword"
                
                value={password}
                onChange={handlePasswordChange}
                
                className="mt-1 block w-full px-4 border border-gray-300 rounded-md shadow-sm focus:outline focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-emd space-x-4">
              <button
              type="button"
              onClick={() =>{ setPasswordDialog(false); setPassword(""); setConfirmPassword("");}}
              
              className="px-6 py-2 text-sm font-medium text-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >Cancel</button>

              <button
              type="button"
              onClick={handleCreateAccount}
              
              className="px-6 py-2 text-sm font-medium text-whtie bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
              Create Account
              </button>
            </div>

          </div>
      )}
    </>
  );
}

export default Signup;
