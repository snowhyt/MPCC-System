import React from 'react'
import NavbarDashboard from '../components/NavbarDashboard'
import SideMenu from '../components/SideMenu'


function MenuLayout({children}) {
    return (
        <>
            <div className='flex flex-col h-screen bg-defaultBG'>
                <NavbarDashboard />
                <div className='flex flex-1 overflow-hidden0'>
                    <SideMenu />
                    <main className="menu-layout">
                        {children}
                    </main>
                </div>

            </div>



        </>
        )
}

export default MenuLayout