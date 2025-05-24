import React, {useState} from "react";
import Navbar from "../components/Navbar.jsx";
import {Toaster, toast} from "react-hot-toast";
function Signup() {

const initialFormData = {
    //name
  
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


}




  const [formData, setFormData] = useState(initialFormData);
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

  const fieldDisplayNames = {
    fname: "First Name",
    mname: "Middle Name",
    lname: "Last Name",
    birthdate: "Birthday",
    sex: "Sex",
    position: "Position",
    role: "Acces Level",
    address1: "Address Line 1",
    email: "Email",
    phoneNumber: "Phone Number",
  };



for (const field in fieldDisplayNames){
  if(Object.prototype.hasOwnProperty.call(formData, field) && !formData[field]){
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
  const response = await fetch("http://localhost:5001/api/auth/signup",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(submissionData),

   
  });
  

  let result;

  try {
    result = await response.json();

  } catch (jsonError) {
    console.error("Error parsing JSON from response:",jsonError, "Status: ", response.status, "StatusText: ", response.statusText)
   

    //new changes

    let textReponse = "";
    
    try {
      textReponse = await response.text();
      console.error ("Non-JSON response text:", textReponse);
    } catch (textError) {
      console.error("Could not get text from non-JSON response:", textError);
    }
    toast.error(`Signup failed: Server returned an unexpected response, Status: ${response.status}.${textReponse}`)
    return;
  }
  
  if (response.ok){
    toast.success(result.message || "Signup successful");

    //reset form and password fields on success
    setFormData(initialFormData);
    setPassword("");
    setConfirmPassword("");
    setPasswordDialog(false);
    
  } else{
    console.error("Signup failed with status:", response.status, "Backend response:", result);
    toast.error(`Signup failed: ${result.message || "An unknown error occurred on the server"}`);
  }
  
} catch (networkError) {
  console.error("Network error during signup:", networkError);
  toast.error("A network error occurred. Please check your connection or if the server is running." )


};

};




  return (
    <>
      <Navbar />
      <Toaster position='top-center' reverseOrder={false} />
      <div className="min-h-screen bg-white">
        <div>
          <img
            src="/images/Hero-section.png"
            className="w-full h-80 object-cover"
            alt="Hero"
          />
        </div>
        <div className="relative z-10 mt-[-10rem] flex items-center justify-center pt-10 pb-15 max-h-full w-full bg-defaultBG">
          
         <div className="flex flex-col w-[57rem] max-h-[calc(100vh-12rem)] p-8 space-y-6 bg-white rounded-lg shadow-lg overflow-y-auto"> 
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
             
              <div className="flex flex-col space-y-4">
                {/* Employee name */}
                <label className="text-gray-700 text-md font-bold">
                  Employee Name
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" First Name"

                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="mname"
                    name="mname"
                    className="border-black border-1 shadow-sm text-gray-700 p-1 w-[16rem]"
                    placeholder=" Middle Name"

                    value={formData.mname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lname"
                    name="lname"
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
                      <p className="text-gray-700">Birthdate</p>
                      <p className="text-gray-700 pl-2">Sex</p>
                      <p className="text-gray-700 pl-3">Job Position</p>
                      <p className="text-gray-700 pr-12">Access level</p>
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
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
                        id="role"
                        name="role"
                        className=" text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                     
                        value={formData.role}
                        onChange={handleChange}
                        required
                     >
                        <option value="">Select an option</option>
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
                        htmlFor="address1"
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
                <label htmlFor="dialogPasswordInput" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input 
                type="password"
                id="dialogPassword"
                name="dialogPassword"
                
                value={password}
                onChange={handlePasswordChange}
                
                className="mt-1 block w-full px-4 border border-gray-300 rounded-md shadow-sm focus:outline focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter password"
                />
              </div>

              <div>
                <label htmlFor="confirmDialogPasswordInput" className="block text-sm font-medium text-gray-700 mb-1 pt-4">
                  Confirm Password
                </label>
                <input 
                type="password" 
                id="confirmDialogPasswordInput"
                name="confirmDialogPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}

                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
        {/* button */}
            <div className="mt-8 flex justify-end space-x-4">
                <button
                type="button"
                onClick={() =>{ setPasswordDialog(false); setPassword(""); setConfirmPassword("");}}
                
               className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                >Cancel</button>

                <button
                type="button"
                onClick={handleCreateAccount}
                
                 className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
