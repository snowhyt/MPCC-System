import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 space-y-4 fixed">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="space-y-2">
        <Link href="/appointments/view" className="block hover:text-blue-400">📅 View Appointments</Link>
        <Link href="/appointments/create" className="block hover:text-blue-400">➕ Create Appointment</Link>
        <Link href="/transactions" className="block hover:text-blue-400">💳 Transaction Records</Link>
      </nav>
    </div>
  );
}
