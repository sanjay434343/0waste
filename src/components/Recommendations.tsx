import React from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface Props {
  result: string;
}

export default function Recommendations({ result }: Props) {
  if (!result) return null;

  const sections = result.split('\n').filter(line => line.trim());

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="prose prose-sm prose-green max-w-none">
          {sections.map((section, i) => (
            <p key={i} className="mb-2 text-sm">{section}</p>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 p-4 border-t border-gray-200">
        <button className="flex items-center gap-1 text-gray-600">
          <ThumbsUp className="w-5 h-5" />
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Comment</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600">
          <Share2 className="w-5 h-5" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}