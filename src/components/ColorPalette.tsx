import { useCallback } from 'react';
import { useColorPalette } from '../hooks/useColorPalette';
import { ColorFamilyCard } from './ColorFamilyCard';
import { ColorNav } from './ColorNav';
import { initialColors } from '../utils/initialColors';
import { SHADE_CONFIG } from '../consts';

export default function ColorPalette() {
    const {
        colorFormat,
        setColorFormat,
        colorFamilies,
        globalShadeCount,
        handleCopy,
        handleCopyAll,
        updateGlobalShadeCount,
    } = useColorPalette(initialColors);

    const handleNavigate = useCallback((familyName: string) => {
        const element = document.getElementById(`color-family-${familyName}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="w-full py-8 mx-auto max-w-full">
            <div className="mb-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 w-full">
                    <input
                        type="range"
                        min={SHADE_CONFIG.MIN_COUNT}
                        max={SHADE_CONFIG.MAX_COUNT}
                        value={globalShadeCount}
                        onChange={(e) => updateGlobalShadeCount(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {globalShadeCount} 个色阶
                    </span>
                </div>
                <select
                    value={colorFormat}
                    onChange={(e) => setColorFormat(e.target.value as 'hex' | 'rgb' | 'hsl')}
                    className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                    shadow-sm"
                >
                    <option value="hex">HEX</option>
                    <option value="rgb">RGB</option>
                    <option value="hsl">HSL</option>
                </select>
            </div>

            <div className="px-4 grid gap-8">
                {colorFamilies.map((family) => (
                    <div key={family.name} id={`color-family-${family.name}`}>
                        <ColorFamilyCard
                            family={family}
                            colorFormat={colorFormat}
                            handleCopy={handleCopy}
                            handleCopyAll={handleCopyAll}
                        />
                    </div>
                ))}
            </div>

            <ColorNav families={colorFamilies} onSelect={handleNavigate} />
        </div>
    );
}