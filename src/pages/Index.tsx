
import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [count, setCount] = useState(0);
  const [topPressed, setTopPressed] = useState(false);
  const [bottomPressed, setBottomPressed] = useState(false);

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

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <ThemeToggle />
      
      {/* Top Half - Backward Counting */}
      <div 
        className={`flex-1 bg-gradient-to-b from-orange-200/60 via-orange-300/70 to-orange-400/80 dark:from-orange-300/40 dark:via-orange-400/50 dark:to-orange-500/60 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm ${
          topPressed ? 'shadow-[inset_0_0_100px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.15)]' : 'hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] dark:hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]'
        }`}
        onClick={decrement}
      >
        <div className="text-center">
          <div className="text-white/70 dark:text-white/60 text-base font-light mb-8 animate-fade-in tracking-wide">
            Tap to Count Down
          </div>
          <div className="text-5xl font-extralight text-white/90 dark:text-white/80 drop-shadow-sm">
            −
          </div>
        </div>
      </div>

      {/* Center Counter Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-7xl font-extralight text-white dark:text-white/90 mb-6 animate-scale-in drop-shadow-lg">
              {count}
            </div>
            <button
              onClick={reset}
              className="bg-white/15 dark:bg-black/15 backdrop-blur-md border border-white/25 dark:border-white/15 hover:bg-white/25 dark:hover:bg-black/25 text-white/90 dark:text-white/80 px-6 py-3 rounded-full font-light flex items-center gap-2 mx-auto transition-all duration-300 text-sm tracking-wide hover:scale-105"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Half - Forward Counting */}
      <div 
        className={`flex-1 bg-gradient-to-t from-emerald-200/60 via-teal-300/70 to-cyan-400/80 dark:from-emerald-300/40 dark:via-teal-400/50 dark:to-cyan-500/60 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm ${
          bottomPressed ? 'shadow-[inset_0_0_100px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.15)]' : 'hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] dark:hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]'
        }`}
        onClick={increment}
      >
        <div className="text-center">
          <div className="text-5xl font-extralight text-white/90 dark:text-white/80 drop-shadow-sm">
            +
          </div>
          <div className="text-white/70 dark:text-white/60 text-base font-light mt-8 animate-fade-in tracking-wide">
            Tap to Count Up
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-16 left-16 w-12 h-12 bg-white/5 dark:bg-white/3 rounded-full animate-pulse backdrop-blur-sm"></div>
      <div className="absolute bottom-16 right-16 w-8 h-8 bg-white/5 dark:bg-white/3 rounded-full animate-pulse delay-1000 backdrop-blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/3 dark:bg-white/2 rounded-full animate-pulse delay-500 backdrop-blur-sm"></div>
      <div className="absolute bottom-1/3 left-20 w-10 h-10 bg-white/3 dark:bg-white/2 rounded-full animate-pulse delay-700 backdrop-blur-sm"></div>
    </div>
  );
};

export default Index;
