import React, { useState, useEffect } from "react"
import placeHolder from "../../public/images/icons/customer-icon.png"



const UpcomingAppoinmentRecord = ({day, month, year, name, serviceType, bldgType, address, targetDate}) => (
<div>
     <button id="list-container" className="group w-full text-left py-2 px-3 hover:text-company">
                <ul id="list-record" >
                    <li className="flex justify-start gap-2">
                      <div>
                         <h1 className="font-bold text-4xl text-company ">{day}</h1>
                          
                            <div className="text-center font-bold">
                            <p className="leading-none ">{month}</p>
                            <p className="leading-none">{year}</p>
                            </div>                                               
                      </div>
                        <div id="middle" className="ml-5">
                          
                            <div className="text-2xl font-semibold">{name}</div>
                            <div className="text-sm">
                                <p>Service Type: {serviceType}</p>
                                <p>Building Type: {bldgType}</p>
                            </div>
                        </div>
                        <div id="right" className="ml-auto mt-1 text-xs flex flex-col justify-start items-end"> {/* Changed ml-6 to ml-auto */}
                            <div className="text-sm text-right">{address}</div> {/* Added text-right to align address text */}
                            <p className="text-sm font-semibold group-hover:text-company"><i>{targetDate}</i></p>
                        </div>
                    </li>
                </ul>
            </button>
</div>


);

// This is a placeholder for your actual data fetching logic
const fetchAppointmentsFromDB = async () => {
    // Replace this with your actual API call or database query
    // For demonstration, returning a promise with sample data after a short delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, day: "01", month: "JULY", year: "2024", name: "John Doe", serviceType: "Pest Control", bldgType: "Residential", address: "123 Main St", targetDate: "07/01/2024 - 07/05/2024" },
                { id: 2, day: "15", month: "JULY", year: "2024", name: "Jane Smith", serviceType: "Termite Inspection", bldgType: "Commercial", address: "456 Oak Ave", targetDate: "07/15/2024 - 07/16/2024" },
                { id: 3, day: "28", month: "AUG", year: "2024", name: "Alice Brown", serviceType: "Rodent Control", bldgType: "Residential", address: "789 Pine Ln", targetDate: "08/28/2024 - 08/30/2024" },
                // Add more records as needed to simulate your database
            ]);
        }, 1000);
    });
};

function UpcomingAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true); // Optional: for loading state

    useEffect(() => {
        const loadAppointments = async () => {
            try {
                setLoading(true);
                const data = await fetchAppointmentsFromDB();
                setAppointments(data);
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
                // Handle error appropriately
            } finally {
                setLoading(false);
            }
        };
        
        loadAppointments();
           }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <div className="flex flex-col">
                {loading && <p>Loading appointments...</p>} 
                {!loading && appointments.length === 0 && <p>No upcoming appointments.</p>}
                {!loading && appointments.map(appointment => (
                    <UpcomingAppoinmentRecord
                        key={appointment.id} // Important: add a unique key for list items
                        day={appointment.day}
                        month={appointment.month}
                        year={appointment.year}
                        name={appointment.name}
                        serviceType={appointment.serviceType}
                        bldgType={appointment.bldgType}
                        address={appointment.address}
                        targetDate={appointment.targetDate}
                    />
                ))}
            </div>
        </>
    )
}

export default UpcomingAppointments;
