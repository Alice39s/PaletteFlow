import { Palette, Moon, Sun, Github } from 'lucide-react';
import { SHADE_CONFIG } from '../consts';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
  colorFormat: 'hex' | 'rgb' | 'hsl';
  onFormatChange: (format: 'hex' | 'rgb' | 'hsl') => void;
  shadeCount: number;
  onShadeCountChange: (count: number) => void;
}

export default function Header({
  isDark,
  onThemeToggle,
  colorFormat,
  onFormatChange,
  shadeCount,
  onShadeCountChange
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="w-full max-w-[2000px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <Palette className="w-6 h-6 text-blue-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white text-left">PaletteFlow</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-left">探索配色方案的无限可能</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <select
                value={colorFormat}
                onChange={(e) => onFormatChange(e.target.value as 'hex' | 'rgb' | 'hsl')}
                className="px-2 py-1 text-sm rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              >
                <option value="hex">HEX</option>
                <option value="rgb">RGB</option>
                <option value="hsl">HSL</option>
              </select>
              <input
                type="number"
                min={SHADE_CONFIG.MIN_COUNT}
                max={SHADE_CONFIG.MAX_COUNT}
                value={shadeCount}
                onChange={(e) => onShadeCountChange(Math.max(SHADE_CONFIG.MIN_COUNT, Math.min(SHADE_CONFIG.MAX_COUNT, parseInt(e.target.value))))}
                className="w-16 px-2 py-1 text-sm rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            <a
              href="https://github.com/Alice39s/PaletteFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300
                       transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={onThemeToggle}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300
                       transition-colors duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 