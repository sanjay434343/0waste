import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Recycle, ArrowRight, Lightbulb, Leaf } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-6 animate-fadeIn">
      <div className="max-w-2xl w-full space-y-12 text-center">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-full p-4 inline-block">
              <Recycle className="w-16 h-16 text-green-500 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Transform Your Waste
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Get creative DIY ideas and upcycling suggestions for your waste items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <Lightbulb className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Creative DIY Ideas</h3>
            <p className="text-gray-600">Get innovative ideas to transform your waste into useful items</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <Leaf className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Eco-Friendly Solutions</h3>
            <p className="text-gray-600">Contribute to a sustainable future with upcycling</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/generate')}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-green-500 rounded-full overflow-hidden shadow-lg hover:bg-green-600 transition-colors"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Upcycling
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
}