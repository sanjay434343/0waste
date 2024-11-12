import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, MapPin } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-14">
        <NavLink to="/" className={({ isActive }) => 
          `p-2 ${isActive ? 'text-green-600' : 'text-gray-600'}`
        }>
          <Home className="w-6 h-6" />
        </NavLink>
       
      </div>
    </nav>
  );
}