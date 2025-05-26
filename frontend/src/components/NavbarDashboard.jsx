import React from "react";

function NavbarDashboard() {
    return (
        <div className="flex justify-center w-full">
            <div className="navbar bg-company shadow-sm px-10">
                <div className="flex-1 ">
                    <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
                    <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" style={{color: "#FFFFF",}} />
                    <img
                        src="/images/MPC-WHITETEXT.png"
                        alt="Logo"
                        className="w-42 h-auto"
                    />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>{" "}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavbarDashboard;
