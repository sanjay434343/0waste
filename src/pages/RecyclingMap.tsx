import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RecyclingMap() {
  const { lat, lng, name } = useParams();
  const decodedName = decodeURIComponent(name || '');
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Link 
          to="/"
          className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h2 className="text-xl font-semibold">{decodedName}</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 h-[600px]">
        <iframe
          title="Recycling Center Map"
          width="100%"
          height="100%"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${lat},${lng}&zoom=15`}
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  );
}