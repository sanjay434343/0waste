import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = 'AIzaSyBbleLaW0rhc_3dgpllTp1WRvdXCoIQrBs';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const PROMPT = `
Please provide detailed upcycling and DIY recommendations for the following waste item:

Item: {item}

Include:
1. Creative DIY Projects: 2-3 innovative ways to transform the item
2. Required Materials: List of additional materials needed
3. Step-by-Step Instructions: Brief but clear steps
4. Environmental Impact: How this upcycling helps the environment
5. Safety Tips: Important precautions while crafting

Format the response in clear, numbered sections with concise explanations.
`.trim();

export async function getWasteRecommendations(item: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = PROMPT.replace('{item}', item);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('AI Error:', error);
    throw new Error('Failed to get recommendations');
  }
}