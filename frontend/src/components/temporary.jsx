
  const UpcomingAppointmentCard = ({ title, viewLink }) => (
    <div className="stat bg-white shadow-lg rounded-3xl p-4 h-100 flex flex-col"> {/* Added padding and background for clarity */}

      <div><div className=' flex items-start justify-between px-2'>
      <div className=' flex items-start justify-between px-2'>
        <div className="stat-title text-2xl font-bold text-gray-700">{title}</div>
        <button className="stat-view hover:text-company text-base font-normal text-gray-400 mt-1" onClick={viewLink}>View All</button>

      </div>
        <div className='flex w-auto justify-center items-start mt-5'> <InventoryTracking /></div>
      <div className='flex flex-col w-auto justify-center items-start mt-5 flex-1 overflow-y-auto'>
        <UpcomingAppointments />
      </div>


    </div>





  );

  //Chemical Usage Card
Unchanged lines          {/* Container for multiple stats cards, using a responsive grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ActiveAppointmentCard
             
              title="Active Appointments"
              viewLink={() => console.log("View All Reservations")} //temporary function for view link
            />

            <UpcomingAppointmentCard
              
              title="Upcoming Appointments"
              viewLink={() => console.log("View All Reservations")} //temporary function for view link
            />

