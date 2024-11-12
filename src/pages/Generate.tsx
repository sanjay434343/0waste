import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Send } from 'lucide-react';

export default function Generate() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Store input in sessionStorage for the results page
    sessionStorage.setItem('wasteItem', input);
    navigate('/results');
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-6 animate-slideUp">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500">
            <h2 className="text-2xl font-bold text-white">Describe Your Waste Item</h2>
            <p className="text-green-50 mt-2">Get personalized upcycling suggestions and DIY ideas</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What item would you like to upcycle? (e.g., plastic bottles, old clothes, cardboard boxes)"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-32 text-gray-700"
              />
              
              
            </div>

            <button
              type="submit"
              disabled={!input.trim()}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <span>Generate Ideas</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}