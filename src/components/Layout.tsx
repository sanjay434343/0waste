import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-16">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}