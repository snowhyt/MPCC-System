import React, {useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Toaster, toast} from "react-hot-toast";
import {useNavigate, Link} from "react-router-dom";
function Signup() {

const initialFormData = {
    fname: "",
    mname: "",
    lname: "",
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
    phone: "",

   


}




  const [formData, setFormData] = useState(initialFormData);
    //password
    const [showPasswordDialog, setPasswordDialog] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //account created modal
    const [showAccountCreatedDialog, setShowAccountCreatedDialog] = useState(false);
    const [newAccountDetails, setNewAccountDetails] = useState(null);
    const navigate = useNavigate();

const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData((prevData) =>({...prevData, [name]: value}));
};

const handlePasswordChange = (e) => setPassword(e.target.value);
const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

const validateMainFormData = () =>{
//for validation only
  const fieldDisplayNames = {
    fname: "First Name",
    mname: "Middle Name",
    lname: "Last Name",
    birthdate: "Birthday",
    sex: "Sex",
    position: "Position",
    role: "Access Level",
    address1: "Address Line 1",
    email: "Email",
    phone: "Phone",
    address: "Address",
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

    let textResponse = "";
    
    try {
      textResponse = await response.text();
      console.error ("Non-JSON response text:", textResponse);
    } catch (textError) {
      console.error("Could not get text from non-JSON response:", textError);
    }
    toast.error(`Signup failed: Server returned an unexpected response, Status: ${response.status}.${textResponse}`)
    return;
  }
  
  if (response.ok){
    toast.success(result.message || "Signup successful");

    //reset form and password fields on success
    setNewAccountDetails(result.employee);
    setShowAccountCreatedDialog(true);
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

const handleGoToLogin = () =>{
  if(newAccountDetails && newAccountDetails.emp_id){
    navigate('/login', {state:{emp_id: newAccountDetails.emp_id}});
  } else{
    navigate('/login');
  }
  setShowAccountCreatedDialog(false);
  setNewAccountDetails(null);
  //reset or clear form inputs
  setFormData(initialFormData);
  setPassword("");
  setConfirmPassword("");
}




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
          
         <div className="flex flex-col w-[57rem] p-8 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-xl text-company font-semibold">
              Fill out the form carefully for registration
            </h2>
            <div className="w-full border-t border-company"></div>
          
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
              {/* <div className="flex flex-col items-center justify-center space-y-4">
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
              </div> */}
          
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
                        id="phone"
                        name="phone"
                        className="border-black border-1 shadow-sm text-gray-700 p-1 w-[25rem]"
                        placeholder="Enter Phone Number"


                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-10">
                      <div className="w-full border-t border-blue-500"></div>
                    </div>
                    <div className="flex justify-center pt-10">
                      <button
                        type="submit"
                        className="w-[15rem] py-3 px-4 bg-company text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

             {/* Don't have an account? */}
              <div className="text-center text-sm text-gray-500">
                        <p className="text-lg font-semibold">
                          Have an existing account?{" "}
                         
                            <Link
                            className="text-company hover:text-blue-700 text-lg not-first:font-semibold"
                            to="/login"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
          </div>
        </div>

          

      </div>

             


    
      <Footer />


      {/* PasswordDialog */}
      {showPasswordDialog && 
      (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-4">
              <h3 className="text-2xl font-semibold mb-6 text-center text-company">
                Create Your Password
              </h3>
              <div>
                <label htmlFor="dialogPasswordInput" className="block text-sm font-medium text-gray-700 mb-1 pt-4">
                  Password
                </label>
                <input 
                type="password"
                id="dialogPassword"
                name="dialogPassword"
                
                value={password}
                onChange={handlePasswordChange}
                
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                placeholder="Re-enter password"
               />
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
                
                className="px-6 py-2 text-sm font-medium text-white bg-company rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                Create Account
              </button>
            </div>
         
            </div>
          </div>
 
      )}

      {/* Account Created Dialog/Modal */}
      {showAccountCreatedDialog && newAccountDetails &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg mx-4 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-company">
              Account Created Successfully!
            </h3>
            <p className="text-red-700 text-sm mb-4"><i>Please take note of your employee ID and password.</i></p>
            <div className="flex flex-col items-center space-y-3 mb-6">
              <img src={newAccountDetails.profilePic || "/images/profile.jpeg"} 
              alt="profilePic" 
              className="w-24 h-24 rounded-full border-2 border-company object-cover"
              onError = {(e) =>{
                //fallback oif URL fails to load
                e.target.oneerror = null;
                e.target.src = "images/profile.jpeg"
              }}
              />
              
              {/* show emp_id */}
              <p className="text-gray-700 text-2xl">
                <strong>Employee ID: {newAccountDetails.emp_id}</strong>
              </p>
              {/* show fullname */}
              <p className="text-gray-700">
                <strong>Full name: </strong>
                {`${newAccountDetails.fname + " "}${newAccountDetails.mname ? newAccountDetails.mname + ' ' : ' '}${newAccountDetails.lname}`}
              </p>
              {/* show trabaho */}
              <p className="text-gray-700">
                <strong>Email: </strong>
                {newAccountDetails.email}

              </p>

            </div>
            <button
            type="button"
            onClick={handleGoToLogin}
              className = "w-full sm:w-auto px-8 py-3 text-white text-lg font-medium tex-white bg-company rounded-md hover:bg-blue-700 focus-outline-none focus:ring-2 focus:ring-blue-500"
            > Login
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}

export default Signup;
