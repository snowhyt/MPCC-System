
import React, { useState, useEffect } from "react"

import placeHolder from "../../public/images/icons/customer-icon.png"





const ActiveAppointmentsRecord = ({profilePic, initialDate, endDate, serviceType, name, status, address}) => (
  <div>
    <button id="list-container" className="group w-full text-left py-2 px-6 hover:text-company">
      <ul id="list-record" >
        <li className="flex justify-start gap-4">
      <img className="w-20 h-20 rounded-full flex items-center justify-center bg-amber-400 p-2" src={profilePic} alt="profile" />
      <div id="middle" className="ml-10">
        <div className="text-xs">{serviceType}</div>
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-sm">
          <p>Address: {address}</p>
          <p>Status: {status}</p>
        </div>
      </div>
      <div id="right" className="ml-auto mr-6 text-xs flex flex-col md:pl-12 justify-end items-end">
        
        <p className="text-sm font-semibold text-slate-600 group-hover:text-company">{initialDate} - {endDate}</p>
      </div>
      </li>
      </ul>
    </button>
  </div>
);


//for fetching data
const fetchActiveAppointmentsfromDB = async () =>{
  //for demonstration
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve([
        {id: 1, profilePic: placeHolder, initialDate: "05/12/25", endDate: "06/03/25", serviceType: "Termite Termination", name: "Oliver Glorioso", status: "On going", address: "Pagbilao, Quezon"},  
        {id: 2, profilePic: placeHolder, initialDate: "05/12/25", endDate: "06/03/25", serviceType: "Termite Termination", name: "Oliver Glorioso", status: "On going", address: "Pagbilao, Quezon"},  
        {id: 3, profilePic: placeHolder, initialDate: "05/12/25", endDate: "06/03/25", serviceType: "Termite Termination", name: "Oliver Glorioso", status: "On going", address: "Pagbilao, Quezon"},      
        {id: 4, profilePic: placeHolder, initialDate: "05/12/25", endDate: "06/03/25", serviceType: "Termite Termination", name: "Oliver Glorioso", status: "On going", address: "Pagbilao, Quezon"},      
        {id: 5, profilePic: placeHolder, initialDate: "05/12/25", endDate: "06/03/25", serviceType: "Termite Termination", name: "Oliver Glorioso", status: "On going", address: "Pagbilao, Quezon"},      

    
    
      ])
    }, 1000)
  })
};

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

const [activeAppointments, setActiveAppointments] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

  const loadActiveAppointments = async () =>{
    try {
      setLoading(true);
      const data = await fetchActiveAppointmentsfromDB();
      setActiveAppointments(data);
    } catch (error) {
      console.error("Failed to fetch active appointments:", error);
    } finally {
      setLoading(false);    
    }
  };

  loadActiveAppointments();
}, []);



    return(
      
        <>
          <div className="flex flex-col">
            {loading && <p>Loading active appointments...</p>}
            {!loading && activeAppointments.length === 0 && <p>No active appointments.</p>}
            {!loading && activeAppointments.map(appointment => (
              <ActiveAppointmentsRecord
                key={appointment.id}
                profilePic={appointment.profilePic}
                initialDate={appointment.initialDate}
                endDate={appointment.endDate}
                serviceType={appointment.serviceType}
                name={appointment.name}
                status={appointment.status}
                address={appointment.address}
              />
            ))}

          </div>

    </>
    )


}

export default ActiveAppointments;