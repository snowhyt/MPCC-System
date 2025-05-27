import React from 'react';




function SideMenu() {

const menuItems = [
 { label: 'Home', link: '#' },
  { label: 'Profile', link: '#' },
  { label: 'Settings', link: '#' },
  { label: 'Logout', link: '#' },
];
    return (
        <>
          <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map(({ label, link }) => (
          <a
            key={label}
            href={link}
            className="block p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MyApp
      </div>
    </aside>



        </>
    )
}

export default SideMenu;