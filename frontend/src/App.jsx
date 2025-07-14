
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast"

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import MenuLayout from './layout/MenuLayout';
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import InventoryTracking from './pages/InventoryTracking';
import BillInvoice from './pages/BillInvoice';
import PayrollManagement from './pages/PayrollManagement';
import CustomerManagement from './pages/CustomerManagement';
import UserControl from './pages/UserControl';

function App() {


  return (

    <>


      <Toaster position='top-center' reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Menu Layout */}

  <Route path="/home"
          element={
            <MenuLayout>
              <Dashboard />
            </MenuLayout>
          } />

        <Route path="/dashboard/home"
          element={
            <MenuLayout>
              <Dashboard />
            </MenuLayout>
          } />

        <Route path="/dashboard/appointment-scheduler"
          element={
            <MenuLayout>
              <Appointment />
            </MenuLayout>
          } />

        <Route path="/dashboard/customer-management"
          element={
            <MenuLayout>
              <CustomerManagement />
            </MenuLayout>
          } />

        <Route path="/dashboard/inventory-tracking"
          element={
            <MenuLayout>
              <InventoryTracking />
            </MenuLayout>
          } />

        <Route path="/dashboard/billing&invoice"
          element={
            <MenuLayout>
              <BillInvoice />
            </MenuLayout>
          } />

        <Route path="/dashboard/payroll-management"
          element={
            <MenuLayout>
              <PayrollManagement />
            </MenuLayout>
          } />

        <Route path="/dashboard/user-control"
          element={
            <MenuLayout>
              <UserControl />
            </MenuLayout>
          } />

      </Routes>


    </>


  )
}


export default App;
