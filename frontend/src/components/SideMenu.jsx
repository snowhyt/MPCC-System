import React from 'react';




function SideMenu() {

const menuItems = [
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
    return (
        <>
          <aside className="h-screen w-64 bg-white text-black flex flex-col shadow-lg">
      <div className="px-6 py-4 text-2xl font-bold border-b  border-gray-700">
        MENU
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.subItems ? (
              <>
                <span className="block p-2 text-lg font-bold text-black-400 uppercase ">{item.label}</span>
                <div className="ml-4 space-y-1">
                  {item.subItems.map(subItem => (
                    <a key={subItem.label} href={subItem.link} className="block p-2 rounded-lg hover:bg-company hover:text-white transition-colors text-sm">
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.link} className="block p-2 rounded-lg hover:bg-company hover:text-white transition-colors">
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MPCC System
      </div>
    </aside>



        </>
    )
}

export default SideMenu;