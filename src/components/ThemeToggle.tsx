
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-black/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] text-white/90 dark:text-white/80 p-3 rounded-full transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;
