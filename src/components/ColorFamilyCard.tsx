import { Copy } from 'lucide-react';
import { ColorShade, ColorFamily, formatColor } from '../utils/colorUtils';

interface ColorFamilyCardProps {
  family: ColorFamily;
  colorFormat: 'hex' | 'rgb' | 'hsl';
  handleCopy: (color: ColorShade) => void;
  handleCopyAll: (shades: ColorShade[]) => void;
}

export function ColorFamilyCard({ family, colorFormat, handleCopy, handleCopyAll }: ColorFamilyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{family.name}</h2>
        </div>
        <button
          onClick={() => handleCopyAll(family.shades)}
          className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors flex items-center gap-2"
        >
          <Copy className="w-4 h-4" />
          <span>复制全部</span>
        </button>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-3">
          {family.shades.map((shade, index) => (
            <div
              key={`${family.name}-${shade.name}-${index}`}
              className="group color-card animate-fade-in"
            >
              <div
                className="color-swatch"
                style={{ backgroundColor: shade.hex }}
                onClick={() => handleCopy(shade)}
              />
              <button
                onClick={() => handleCopy(shade)}
                className="copy-button"
                title="复制颜色值"
              >
                <Copy className="w-4 h-4" />
              </button>
              <div className="color-info">
                <div className="font-medium text-gray-900 dark:text-white">{shade.name}</div>
                <div className="text-gray-500 dark:text-gray-400 truncate text-xs">
                  {formatColor(shade, colorFormat)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}