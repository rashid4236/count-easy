
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-900">
      {/* Top Half - Backward Counting */}
      <div 
        className={`flex-1 bg-gradient-to-b from-red-900 to-red-800 flex items-center justify-center cursor-pointer transition-all duration-300 ${
          topPressed ? 'bg-red-700' : 'hover:bg-red-700'
        }`}
        onClick={decrement}
      >
        <div className="text-center">
          <div className="text-red-100 text-lg font-light mb-8">
            Tap to Count Down
          </div>
          <div className="text-6xl font-light text-red-100">
            −
          </div>
        </div>
      </div>

      {/* Center Counter Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-7xl font-light text-white mb-6">
              {count}
            </div>
            
            {!showResetConfirm ? (
              <button
                onClick={handleResetClick}
                className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-3 rounded-full font-light flex items-center gap-2 mx-auto transition-all duration-300 text-sm"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            ) : (
              <div className="space-y-4">
                <div className="text-gray-200 text-sm mb-4">
                  Do you want to reset?
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={confirmReset}
                    className="bg-green-700 hover:bg-green-600 text-green-100 px-4 py-2 rounded-full font-light flex items-center gap-2 transition-all duration-300 text-sm"
                  >
                    <Check size={14} />
                    Yes
                  </button>
                  <button
                    onClick={cancelReset}
                    className="bg-red-700 hover:bg-red-600 text-red-100 px-4 py-2 rounded-full font-light flex items-center gap-2 transition-all duration-300 text-sm"
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
        className={`flex-1 bg-gradient-to-t from-green-900 to-green-800 flex items-center justify-center cursor-pointer transition-all duration-300 ${
          bottomPressed ? 'bg-green-700' : 'hover:bg-green-700'
        }`}
        onClick={increment}
      >
        <div className="text-center">
          <div className="text-6xl font-light text-green-100">
            +
          </div>
          <div className="text-green-100 text-lg font-light mt-8">
            Tap to Count Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
