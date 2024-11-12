import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface Center {
  name: string;
  distance: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface Props {
  centers: Center[];
  loading: boolean;
  error: string | null;
  city: string | null;
}

export default function RecyclingCenters({ centers, loading, error, city }: Props) {
  const handleDirections = (center: Center) => {
    const url = `https://maps.google.com/maps?daddr=${center.coordinates.lat},${center.coordinates.lng}`;
    window.location.href = url;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center rounded-lg bg-red-50">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="sticky top-16 bg-white z-10 p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Nearby Centers</h2>
          {city && <span className="text-sm text-gray-600">📍 {city}</span>}
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {centers.map((center, index) => (
          <div key={index} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">{center.name}</h3>
                  <p className="text-gray-600 text-sm">{center.address}</p>
                  <span className="text-green-600 text-sm block mt-1">{center.distance}</span>
                </div>
              </div>
              <button
                onClick={() => handleDirections(center)}
                className="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"
                title="Get directions"
              >
                <Navigation className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}