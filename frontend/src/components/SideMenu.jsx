import React from 'react';
import appointmentIcon from '/images/icons/appointment-icon.png';
import dashboardIcon from '/images/icons/dashboard-icon.png';
import customerIcon from '/images/icons/customer-icon.png';
import inventoryIcon from '/images/icons/inventory-icon.png';
import billingIcon from '/images/icons/billing-icon.png';
import payrollIcon from '/images/icons/payroll-icon.png';
import userIcon from '/images/icons/user-control-icon.png';




function SideMenu() {

// Define the initial structure of menu items without icons
const rawMenuItems = [
  { label: 'Dashboard', link: '/dashboard' }, // Assuming a route for dashboard
  { 
    label: 'Appointment Scheduler', 
    subItems: [
      { label: 'Scheduler', link: '#' },
      { label: 'Transaction Records', link: '#' },
      { label: 'Appointments', link: '#' },
    ] 
  },
  { 
    label: 'Customer Management', 
    subItems: [
      { label: 'Customer Records', link: '#' },
      { label: 'Transaction History', link: '#' },
    ]
  },
  { 
    label: 'Inventory Tracking', 
    subItems: [
      { label: 'Release per Transaction', link: '#' },
      { label: 'In-Stocks', link: '#' },
    ]
  },
  {
    label: 'Billing & Invoicing',
    subItems: [
      { label: 'Billing Records', link: '#' },
      { label: 'Invoice Records', link: '#' },
    ]
  },
  { 
    label: 'Payroll Management', 
    subItems: [
      { label: 'Add Salary Details', link: '#' },
      { label: 'Payroll Calculator', link: '#' },
      { label: 'Payslips', link: '#' },
    ]
  },
  { 
    label: 'User Control', 
    subItems: [
      { label: 'Roles and Access Control', link: '#' },
    ]
  },
];

// Map icons to menu items, creating a new array called 'menuItems'
const menuItems = rawMenuItems.map(item =>{
  let icon = null;
  if(item.label === 'Dashboard') icon = dashboardIcon;
  else if(item.label === 'Appointment Scheduler') icon = appointmentIcon;
  else if(item.label === 'Customer Management') icon = customerIcon;
  else if(item.label === 'Inventory Tracking') icon = inventoryIcon;
  else if(item.label === 'Billing & Invoicing') icon = billingIcon;
  else if(item.label === 'Payroll Management') icon = payrollIcon;
  else if(item.label === 'User Control') icon = userIcon;
  return {
    ...item,
    icon
  };
});


    return (
        <>
          <aside className="w-64 bg-white text-black flex flex-col shadow-lg"> {/* Removed h-screen, it will inherit height from parent flex container */}
      
      {/* Menu Title */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.subItems ? (
              <div> {/* Grouping span and sub-items list */}
                <span className=" p-2 text-lg font-bold text-gray-600 uppercase flex items-center"> {/* Adjusted text color, added flex items-center */}
                  {item.icon && <img src={item.icon} alt={`${item.label} icon`} className="w-8 h-8 mr-3" />}
                  {item.label}
                </span>
                <div className="ml-4 space-y-1"> {/* Indent sub-items */}
                  {item.subItems.map(subItem => (
                    <a key={subItem.label} href={subItem.link} className="block p-2 rounded-lg text-gray-700 hover:bg-company hover:text-white transition-colors text-sm ml-3"> {/* Added ml-3 for sub-item text alignment with icon */}
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              // Main menu item without sub-items (like Dashboard)
              // Added flex and items-center to align icon and text
              <a href={item.link} className=" p-2 rounded-lg text-gray-700 hover:bg-company hover:text-white transition-colors flex items-center"> {/* Added text-gray-700 for consistency */}
                {item.icon && <img src={item.icon} alt={`${item.label} icon`} className="w-8 h-8 mr-3" />}
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>

     
    </aside>



        </>
    )
}

export default SideMenu;