import React from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import SideMenu from '../components/SideMenu';

function Dashboard() {
  // A simple component for individual stat cards
  const StatCard = ({ title, value, desc }) => (
    <div className="stat bg-base-100 shadow-lg rounded-lg p-4"> {/* Added padding and background for clarity */}
      <div className="stat-title text-sm text-gray-500">{title}</div>
      <div className="stat-value text-2xl font-bold text-gray-800">{value}</div>
      {desc && <div className="stat-desc text-xs text-gray-400">{desc}</div>}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100"> {/* Use flex-col for overall page structure */}
      <NavbarDashboard />
      <div className="flex flex-1 overflow-hidden"> {/* Flex container for SideMenu and main content */}
        <SideMenu /> {/* SideMenu will take its defined width (w-64 from its own file) */}
        <main className="flex-1 p-6 overflow-y-auto"> {/* Main content area */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Dashboard Overview</h1>
          
          {/* Container for multiple stats cards, using a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="Total Page Views" value="89,400" desc="21% more than last month" />
            <StatCard title="New Users" value="2,350" desc="5% more than last week" />
            <StatCard title="Active Subscriptions" value="1,200" desc="Up by 30" />
          </div>

          {/* You can add more dashboard sections/components here */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;