import React from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import SideMenu from '../components/SideMenu';
import salesIconUrl from '/images/icons/sales-icon.svg';
import transactionIconUrl from '/images/icons/transaction-icon.svg';
import customerIconUrl from '/images/icons/active-customer-icon.svg';
import indicatorGreen from '/images/icons/indicator-green.png';
import indicatorRed from '/images/icons/indicator-red.png';


function Dashboard() {
  // A simple component for individual stat cards
  const StatCard = ({ title, value, desc, icon, indicator, indicatorAlt }) => (
    <div className="stat-icon bg-base-100 shadow-lg rounded-lg p-8"> {/* Added padding and background for clarity */}
     <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mb-2" /> {/* Dynamic alt, using standard Tailwind w-16/h-16 */}
      <div className="stat-title text-lg text-gray-500">{title}</div>
      <div className="stat-value text-4xl font-bold text-gray-800">{value}</div>
      <div>

      {desc && indicator && ( <div className="stat-desc text-sm text-company flex gap-4 items-center mt-6 ml-5">
        <img className='stat-indicator w-8 h-8' src={indicator} alt={indicatorAlt} />
        <span className='flex-1 text-lg font-bold'>{desc}%</span>
        <p className='flex-1 text-right text-lg text-gray-500'>Than the last month</p>
       

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

   const StatGraph = ({ title, value, desc }) => (
    <div className="stat bg-base-100 shadow-lg rounded-lg p-4"> {/* Added padding and background for clarity */}
      <div className="stat-title text-sm text-gray-500">{title}</div>
      <div className="stat-value text-4xl font-bold text-gray-800">{value}</div>
      {desc && <div className="stat-desc text-xs text-company">{desc}</div>}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-defaultBG"> {/* Use flex-col for overall page structure */}
      <NavbarDashboard />
      <div className="flex flex-1 overflow-hidden"> {/* Flex container for SideMenu and main content */}
        <SideMenu /> {/* SideMenu will take its defined width (w-64 from its own file) */}
        <main className="flex-1 p-6 overflow-y-auto"> {/* Main content area */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Dashboard Overview</h1>
          
          {/* Container for multiple stats cards, using a responsive grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
            <StatGraph title="Total Sales" value="89,400" desc="21% more than last month" />
            <StatGraph title="Total Successful Transactions" value="2,350" desc="5% more than last week" />
            
           
          </div>

          {/* You can add more dashboard sections/components here */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;