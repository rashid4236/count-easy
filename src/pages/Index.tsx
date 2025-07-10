
import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top Half - Backward Counting */}
      <div 
        className="flex-1 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center cursor-pointer transition-all duration-200 hover:brightness-110 active:scale-95"
        onClick={decrement}
      >
        <div className="text-center">
          <div className="text-white/80 text-lg font-medium mb-2 animate-fade-in">
            Tap to Count Down
          </div>
          <div className="text-6xl font-bold text-white drop-shadow-lg">
            −
          </div>
        </div>
      </div>

      {/* Center Counter Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white rounded-3xl shadow-2xl px-8 py-6 border-4 border-white/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-800 mb-4 animate-scale-in">
              {count}
            </div>
            <button
              onClick={reset}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              <RotateCcw size={20} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Half - Forward Counting */}
      <div 
        className="flex-1 bg-gradient-to-t from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center cursor-pointer transition-all duration-200 hover:brightness-110 active:scale-95"
        onClick={increment}
      >
        <div className="text-center">
          <div className="text-6xl font-bold text-white drop-shadow-lg">
            +
          </div>
          <div className="text-white/80 text-lg font-medium mt-2 animate-fade-in">
            Tap to Count Up
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 right-16 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-16 w-14 h-14 bg-white/5 rounded-full animate-pulse delay-700"></div>
    </div>
  );
};

export default Index;
