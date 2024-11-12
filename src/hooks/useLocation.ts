import { useState, useEffect } from 'react';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  city: string | null;
  error: string | null;
  loading: boolean;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    city: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: "Geolocation is not supported by your browser",
        loading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Reverse geocoding to get city name
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`
          );
          const data = await response.json();
          const city = data.results[0]?.components.city || data.results[0]?.components.town;
          
          setLocation({
            latitude,
            longitude,
            city,
            error: null,
            loading: false,
          });
        } catch (error) {
          setLocation(prev => ({
            ...prev,
            error: "Unable to determine your city",
            loading: false,
          }));
        }
      },
      (error) => {
        setLocation(prev => ({
          ...prev,
          error: "Unable to retrieve your location",
          loading: false,
        }));
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return location;
}