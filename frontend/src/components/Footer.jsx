import React from "react";

function Footer() {
  return (
   <>
              {/* Footer */}
      <div className="bg-company w-full">
        <div className="flex flex-col items-center h-25">
          <img
            src="/images/MPC-WHITETEXT.png"
            alt="Logo"
            className="w-65 h-auto"
          />
          <div className="w-11/12 border-t border-gray-300 mt-4 mb-2"></div>
        </div>

        <p className="text-center text-sm text-white p-5">
          Copyright <strong>Metropolitan Pest Control Corporation.</strong> All
          Rights Reserved
        </p>
      </div>
   </>
   


)
}

export default Footer;
