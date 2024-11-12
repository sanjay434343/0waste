import React from 'react';
import { Camera, Send } from 'lucide-react';

interface Props {
  input: string;
  loading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function WasteForm({ input, loading, onInputChange, onSubmit }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Share your waste item</h3>
            <p className="text-sm text-gray-500">Get recycling recommendations</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={onSubmit} className="p-4">
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="What item do you want to recycle or upcycle?"
          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-24 text-sm"
        />
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <span>Share</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}