import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>by</span>
          <a
            href="https://github.com/Alice39s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Alice39s
          </a>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © 2024 PaletteFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 