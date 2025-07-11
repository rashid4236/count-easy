
import { useState } from 'react';
import { RotateCcw, X, Check } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);
  const [topPressed, setTopPressed] = useState(false);
  const [bottomPressed, setBottomPressed] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
    setBottomPressed(true);
    setTimeout(() => setBottomPressed(false), 200);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setTopPressed(true);
    setTimeout(() => setTopPressed(false), 200);
  };

  const handleResetClick = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    setCount(0);
    setShowResetConfirm(false);
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/6 right-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/5 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1200"></div>
        <div className="absolute bottom-1/5 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-2/3 right-1/5 w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse delay-600"></div>
        <div className="absolute bottom-2/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-900"></div>
      </div>
      
      {/* Top Half - Backward Counting */}
      <div 
        className={`flex-1 bg-gradient-to-b from-indigo-400/30 via-purple-500/40 to-blue-600/50 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm ${
          topPressed ? 'shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]' : 'hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]'
        }`}
        onClick={decrement}
      >
        <div className="text-center">
          <div className="text-white/70 text-base font-light mb-8 animate-fade-in tracking-wide">
            Tap to Count Down
          </div>
          <div className="text-5xl font-extralight text-white/90 drop-shadow-sm">
            −
          </div>
        </div>
      </div>

      {/* Center Counter Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-7xl font-extralight text-white mb-6 animate-scale-in drop-shadow-lg">
              {count}
            </div>
            
            {!showResetConfirm ? (
              <button
                onClick={handleResetClick}
                className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 text-white/90 px-6 py-3 rounded-full font-light flex items-center gap-2 mx-auto transition-all duration-300 text-sm tracking-wide hover:scale-105"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            ) : (
              <div className="space-y-4">
                <div className="text-white/80 text-sm mb-4">
                  Do you want to reset?
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={confirmReset}
                    className="bg-green-600/20 backdrop-blur-md border border-green-400/30 hover:bg-green-600/30 text-green-200 px-4 py-2 rounded-full font-light flex items-center gap-2 transition-all duration-300 text-sm hover:scale-105"
                  >
                    <Check size={14} />
                    Yes
                  </button>
                  <button
                    onClick={cancelReset}
                    className="bg-red-600/20 backdrop-blur-md border border-red-400/30 hover:bg-red-600/30 text-red-200 px-4 py-2 rounded-full font-light flex items-center gap-2 transition-all duration-300 text-sm hover:scale-105"
                  >
                    <X size={14} />
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Half - Forward Counting */}
      <div 
        className={`flex-1 bg-gradient-to-t from-purple-400/30 via-indigo-500/40 to-cyan-600/50 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm ${
          bottomPressed ? 'shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]' : 'hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]'
        }`}
        onClick={increment}
      >
        <div className="text-center">
          <div className="text-5xl font-extralight text-white/90 drop-shadow-sm">
            +
          </div>
          <div className="text-white/70 text-base font-light mt-8 animate-fade-in tracking-wide">
            Tap to Count Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
