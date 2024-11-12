import React from 'react';
import { Recycle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Recycle className="w-7 h-7 text-green-600" />
          <h1 className="text-xl font-semibold">0Waste</h1>
        </div>
      </div>
    </header>
  );
}