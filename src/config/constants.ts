export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const AI_PROMPT = `
Please provide detailed recommendations for the following waste item:

Item: {item}

Please include:
1. Creative Upcycling Ideas: Practical ways to reuse or repurpose the item
2. Proper Disposal Methods: Specific recycling or disposal guidelines
3. Environmental Impact: Brief explanation of environmental considerations
4. Safety Notes: Any relevant handling precautions

Format the response in clear, numbered sections.
`.trim();

export const MOCK_CENTERS = [
  {
    name: "EcoHub Recycling Center",
    distance: "0.8 miles",
    address: "123 Green Street",
    coordinates: { lat: 0, lng: 0 }
  },
  {
    name: "City Recycling Facility",
    distance: "1.2 miles",
    address: "456 Sustainability Ave",
    coordinates: { lat: 0, lng: 0 }
  }
];