import { Palette, Moon, Sun, Github } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
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