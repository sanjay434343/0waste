import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { getWasteRecommendations } from '../services/ai';
import { ArrowLeft } from 'lucide-react';

export default function Results() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const wasteItem = sessionStorage.getItem('wasteItem');
    if (!wasteItem) {
      navigate('/generate');
      return;
    }

    const fetchResults = async () => {
      try {
        const recommendations = await getWasteRecommendations(wasteItem);
        setResult(recommendations);
      } catch (err) {
        setError('Failed to generate recommendations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center animate-fadeIn">
        <div className="text-center space-y-4">
         
          <p className="text-gray-600">Generating creative ideas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => navigate('/generate')}
            className="text-green-500 hover:text-green-600 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Remove any markdown symbols like '#' and '*', then split by lines and format into paragraphs
  const formattedResult = result
    ?.replace(/[#*]/g, '')  // Remove '#' and '*' characters
    .split('\n')            // Split by newlines
    .map((line, index) => (
      // Bold the first line of each section to simulate a heading
      <p key={index} className={index === 0 ? "font-bold text-gray-700" : "text-gray-700 leading-relaxed"}>
        {line.trim()}
      </p>
    ));

  return (
    <div className="min-h-[calc(100vh-8rem)] p-6 animate-slideUp">
      <div className="max-w-3xl mx-auto space-y-6">
        <button
          onClick={() => navigate('/generate')}
          className="text-green-500 hover:text-green-600 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          New Item
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500">
            <h2 className="text-2xl font-bold text-white">Upcycling Ideas</h2>
            <p className="text-green-50 mt-2">Creative ways to reuse your waste</p>
          </div>

          <div className="p-6 space-y-4">
            {/* Render the cleaned and formatted result as paragraphs */}
            {formattedResult}
          </div>
        </div>
      </div>
    </div>
  );
}
