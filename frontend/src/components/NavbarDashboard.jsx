import React from "react";
import SideMenu from "./SideMenu";


function NavbarDashboard() {
    return (
       <>
       <div className="navbar bg-company shadow-sm px-5">
  <div className="flex-none">
   
    {/* <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current text-white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button> */}
  </div>
   <div className="flex-1 pl-10">
          <img
            src="/images/MPC-WHITETEXT.png"
            alt="Logo"
            className="w-42 h-auto"
          />
        </div>

   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      
</div>
       
       
       
       
       
       
       </>
    );
}

export default NavbarDashboard;
