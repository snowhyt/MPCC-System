import React from "react"
import placeHolder from "../../public/images/icons/customer-icon.png"


function ActiveAppointments(){

// const ListData = ({profilePic,initialDate, endDate, customerName, service, typeService}) => (
//     <div id="list-container" className="flex bg-amber-400">
//       <ul id="list-record" className="flex items-start justify-start">
//       <img src={profilePic} alt="profile-picture" />
//       <div id="middle"></div>
//       <div id="right"></div>
//       </ul>
//     </div>
    

// );


    return(
      
        <>


 <button id="list-container" className="group w-full text-left py-2 px-6 hover:text-company">
      <ul id="list-record" >
        <li className="flex justify-start gap-4">
      <img className="w-20 h-20 rounded-full flex items-center justify-center bg-amber-400 p-2" src={placeHolder} alt="profile" />
      <div id="middle" className="ml-10">
        <div className="text-xs">ServiceType</div>
        <div className="text-2xl font-semibold">Nino Oliver E Glorioso</div>
        <div className="text-sm">
          <p>Address St. Example Brgy  Example City</p>
          <p>Status: On going</p>
        </div>
      </div>
      <div id="right" className="mx-6 text-xs flex flex-col justify-end">
        <p className="text-sm font-semibold text-slate-600 group-hover:text-company">05/12/25 - 06/03/25</p>
      </div>
      </li>
      </ul>
    </button>
    </>
    )


}

export default ActiveAppointments;