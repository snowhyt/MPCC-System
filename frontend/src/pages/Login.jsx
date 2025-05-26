import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar.jsx";
import {Toaster, toast} from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";


function Login() {
  //initialize to object
  const navigate = useNavigate();
  const location = useLocation();


  const initialFormData = {
    emp_id: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormData);
  
  //for loading screen
  const [loading, setLoading] = useState(false);



  useEffect(() =>{

    if(location.state?.emp_id){
      setFormData((prevData) =>({
        ...prevData,
        emp_id: location.state.emp_id
        
      }));
      navigate(location.pathname, { replace: true, state: {} })
    } 
  },[location.state, navigate,location.pathname]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  }


  //HANDLE LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    //basic validation
    if(!formData.emp_id){
      toast.error("Employee ID is required");
      setLoading(false);
      return;
    }

    if(!formData.password){
      toast.error("Password is required");
      setLoading(false);
      return;
    }

    try {
      const response =await fetch("http://localhost:5001/api/auth/login",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(formData),
        
      });

      let result;
      try{
        result = await response.json();
      } catch(jsonError){
        console.error("Error parsng JSON from login response:", jsonError);
        const textResponse = await response.text();
        toast.error(`Login failed: Server returned an unexpected response. Status: ${response.status}. ${textResponse}`);
        setLoading(false);
        return;
      }
      if(response.ok){
        toast.success(result.message|| "Login successful!");
       
        //Store token and user data in LocalStorage
        if(result.token){
          localStorage.setItem("authToken", result.token);
        }
        if(result.employee){
          localStorage.setItem("user",JSON.stringify(result.employee));
        }

        

        console.log("Logged in employee", result.employee);

        navigate("/dashboard");
      } else {
        toast.error(result.message ||"Login Failed. Please check your credentials.");

      }

    } catch (networkError) {
      console.error("Network error during login:", networkError);
      toast.error("Network error. Please check your internet connection.");
      
    } finally{
      setLoading(false);
    }
  }





  


  return (
    <>
      <Navbar />
      <Toaster position='top-center' reverseOrder={false}/>
      {/* Hero Image */}
      <div>
        <img
          src="/images/Hero-section.png"
          className="w-full h-80 object-cover"
          alt="Hero Section"
        />
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center h-[45rem] bg-defaultBG px-4">
        <div className="w-full max-w-xl bg-white p-10 md:p-14 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-center text-company">LOGIN</h2>

          <form onSubmit={handleLogin} className="space-y-6 text-2xl">
            {/* Username Field */}
            <div>
              <label
                htmlFor="emp_id"
                className="text-lg font-medium text-gray-600"
              >
                Emp ID
              </label>
              <input
                type="text"
                id="emp_id"
                name="emp_id"
                required
                placeholder="Enter your Employee ID"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              
              value={formData.emp_id}
              onChange={handleChange}
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
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"

                value={formData.password}
                onChange={handleChange}
             />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-company text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled = {loading}
              
              >
                {loading ? "Loading in..." : "Log In"}
              </button>
              
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p className="text-lg font-semibold">
              Don't have an account?{" "}
             
                <Link
                className="text-company hover:text-blue-700 text-lg not-first:font-semibold"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  );
}

export default Login;
