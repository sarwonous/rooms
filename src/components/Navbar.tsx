import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Calendar, BarChart2, LogIn, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          RoomBooker
        </Link>
        <div className="flex space-x-4">
          <Link to="/rooms" className="flex items-center">
            <Home className="mr-1" size={18} /> Rooms
          </Link>
          <Link to="/tenants" className="flex items-center">
            <Users className="mr-1" size={18} /> Tenants
          </Link>
          <Link to="/book" className="flex items-center">
            <Calendar className="mr-1" size={18} /> Book
          </Link>
          <Link to="/login" className="flex items-center">
            <LogIn className="mr-1" size={18} /> Login
          </Link>
          <Link to="/login" className="flex items-center">
            <LogOut className="mr-1" size={18} /> Logout
          </Link>
          <Link to="/dashboard" className="flex items-center">
            <BarChart2 className="mr-1" size={18} /> Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
