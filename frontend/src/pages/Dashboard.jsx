import React from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import SideMenu from '../components/SideMenu';

import salesIconUrl from '/images/icons/sale-icon.png';
import transactionIconUrl from '/images/icons/transac-icon.png';
import customerIconUrl from '/images/icons/active-icon.png';
import indicatorGreen from '/images/icons/indicator-green.png';
import indicatorRed from '/images/icons/indicator-red.png';
import ActiveAppointments from '../components/ActiveAppointments';
import UpcomingAppointments from '../components/UpcomingAppointments';


function Dashboard() {
  // A simple component for individual stat cards
  const StatCard = ({ title, value, desc, icon, indicator, indicatorAlt }) => (
    <div className="stat-icon bg-base-100 shadow-lg rounded-3xl p-5"> {/* Added padding and background for clarity */}
     <img src={icon} alt={`${title} Icon`} className="w-13 h-13 mb-2" /> {/* Dynamic alt, using standard Tailwind w-16/h-16 */}
      <div className="stat-title text-lg text-gray-500">{title}</div>
      <div className="stat-value text-4xl font-bold text-gray-800">{value}</div>
      <div>

      {desc && indicator && ( <div className="stat-desc text-sm text-company flex gap-4 items-center mt-3 ml-5">
        <img className='stat-indicator w-5 h-5' src={indicator} alt={indicatorAlt} />
        <span className='flex-1 text-lg font-bold'>{desc}%</span>
        <p className='flex-1 text-right text-md text-gray-500'>Than the last month</p>
       

        </div>
       )}
         {desc && !indicator && (
         <div className="stat-desc text-sm text-company mt-6">
            <p className='text-lg font-bold text-gray-700'>{desc}</p>
        </div>
      )}

    </div>
    </div>
  );
  const getStatCardData = (descValue) => {
    const numericDesc = parseFloat(descValue);

    if(!isNaN(numericDesc) && !/[a-zA-Z]/.test(descValue)){
      const isPositiveTrend = numericDesc > 10;
      const indicator = isPositiveTrend ? indicatorGreen : indicatorRed;
      const indicatorAlt = isPositiveTrend ? "Increase indicator" : "Decrease indicator";
      return {desc: descValue, indicator, indicatorAlt };
    }
    // If descValue is not a simple number, return it as desc and no indicator
    // This ensures StatCard always gets a desc prop if one was intended.
    return { desc: descValue, indicator: null, indicatorAlt: '' };
  };

   const StatGraphCard_1 = ({ title, viewLink}) => (
    <div className="stat bg-blue-100 shadow-lg rounded-3xl p-4 h-100"> {/* Added padding and background for clarity */}
     
     <div><div className=' flex items-start justify-between px-2'>
      <div className="stat-title text-2xl font-bold text-gray-700">{title}</div>
      <button className="stat-view hover:text-company text-base font-normal text-gray-400 mt-1" onClick={viewLink}>View All</button>
      
      </div>
      <div className='flex w-auto justify-center items-start mt-5'> <ActiveAppointments/></div>
      </div>
      
         
    </div>
    
  );

  const StatGraphCard_2 = ({ title, viewLink}) => (
    <div className="stat bg-amber-100 shadow-lg rounded-3xl p-4 h-100"> {/* Added padding and background for clarity */}
     
     <div><div className=' flex items-start justify-between px-2'>
      <div className="stat-title text-2xl font-bold text-gray-700">{title}</div>
      <button className="stat-view hover:text-company text-base font-normal text-gray-400 mt-1" onClick={viewLink}>View All</button>
      
      </div>
      <div className='flex w-auto justify-center items-start mt-5'> <UpcomingAppointments/></div>
      </div>
      
         
    </div>
    
  );

  return (
    <div className="flex flex-col h-screen bg-defaultBG"> {/* Use flex-col for overall page structure */}
      <NavbarDashboard />
      <div className="flex flex-1 overflow-hidden"> {/* Flex container for SideMenu and main content */}
        <SideMenu /> {/* SideMenu will take its defined width (w-64 from its own file) */}
        <main className="flex-1 p-6 overflow-y-auto mx-30"> {/* Main content area */}
          <h1 className="text-3xl font-semibold text-company mb-8">Dashboard Overview</h1>
          
          {/* Container for multiple stats cards, using a responsive grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard 
              icon={salesIconUrl} 
              title="Total Sales" 
              value="89,400" 
              {...getStatCardData("21")} // desc will be "21"
            />
            <StatCard 
              icon={transactionIconUrl} 
              title="Total Successful Transactions" 
              value="2,350" 
              {...getStatCardData("5")}  // desc will be "5"
            />
            <StatCard 
              icon={customerIconUrl} 
              title="Total Active Customers" 
              value="1,200" 
              {...getStatCardData("30")} // Assuming "30" is a percentage for indicator logic
            />
          </div>


             {/* Container for multiple stats cards, using a responsive grid */}
           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <StatGraphCard_1
            title="On-going Activities" 
            viewLink={() => console.log("View All Reservations")} //temporary function for view link
            value="89,400" 
            desc="21% more than last month" />

             <StatGraphCard_2
            title="Upcoming Appointments" 
            viewLink={() => console.log("View All Reservations")} //temporary function for view link
            value="89,400" 
            desc="21% more than last month" />


            
            
          </div>

          {/* You can add more dashboard sections/components here */}
        

        </main>
        
      </div>
      
    </div>

    
  );
}

export default Dashboard;